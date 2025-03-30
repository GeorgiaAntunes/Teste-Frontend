import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "../schemas/cepSchema";
import { z } from "zod";
import { useState } from "react";
import { getAddressByCep } from "../services/cepService";
import { TEXTS } from "../constants/texts";


export type FormData = z.infer<typeof schema>;

export const useCepForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    control,
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
    const isValidCep = /^\d{8}$/.test(cep);
    
    if (!isValidCep) return;
  
    setLoading(true);
    try {
      const data = await getAddressByCep(cep);
      if (data) {
        (["logradouro", "bairro", "cidade", "estado", "complemento"] as const).forEach((field) => {
          setValue(field, data[field] || "");
        });
      }
    } catch (error) {
      console.error(TEXTS.buscaCep, error); 
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
    } catch (error) {
      console.error(TEXTS.erroSalvar, error);
    }
  };

  return {
    register,
    handleSubmit,
    handleCepBlur,
    handleClear,
    onSubmit,
    errors,
    loading,
    control,
  };
};
