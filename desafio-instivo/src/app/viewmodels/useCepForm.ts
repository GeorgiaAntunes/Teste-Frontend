import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "../schemas/cepSchema";
import { useState } from "react";
import { getAddressByCep } from "../services/cepService";
import { TEXTS } from "../constants/texts";
import { z } from "zod";
import { formatZipCode } from "../utils/zipCodeMask";

export type FormData = z.infer<typeof schema>;

export const useCepForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    control,
    setError,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      cep: "",
      logradouro: "",
      bairro: "",
      cidade: "",
      estado: "",
      complemento: "",
    },
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleCepBlur = async () => {
    const cep = watch("cep").replace(/\D/g, ""); 
    const formattedCep = formatZipCode(cep); 
    setValue("cep", formattedCep); 
  
    const isValidCep = /^\d{8}$/.test(formattedCep.replace(/\D/g, "")); 
  
    if (!isValidCep) {
      setError("cep", { type: "manual", message: TEXTS.cepInvalido }); 
      return;
    }
  
    setLoading(true);
    try {
      const data = await getAddressByCep(formattedCep.replace(/\D/g, ""));
      
      if (data) {
        (["logradouro", "bairro", "cidade", "estado", "complemento"] as const).forEach((field) => {
          setValue(field, data[field] || "");
        });
        setError("cep", { type: "manual", message: "" }); 
      } else {
        setError("cep", { type: "manual", message: TEXTS.cepNaoEncontrado }); 
      }
    } catch (error) {
      console.error(TEXTS.erroBuscarCep, error);
      setError("cep", { type: "manual", message: TEXTS.erroBuscarCep }); 
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => reset();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(TEXTS.erroSalvar);
      }

      console.log(TEXTS.sucessoSalvar);
      reset();
    } catch (error) {
      console.error(TEXTS.erroSalvar, error);
    }
  };

  return {
    register,
    handleSubmit,
    setValue, 
    handleCepBlur,
    handleClear,
    onSubmit,
    errors,
    loading,
    control,
  };
};
