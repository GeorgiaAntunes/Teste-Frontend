import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "../schemas/cepSchema";
import { useState } from "react";
import { getAddressByCep } from "../services/cepService";
import { TEXTS } from "../constants/texts";
import { z } from "zod";
import { formatZipCode } from "../utils/zipCodeMask";
import { Control } from "react-hook-form";
import axios from "axios";

export type FormData = z.infer<typeof schema>;

interface UseCepFormReturn {
  control: Control<FormData>;
  handleSubmit: ReturnType<typeof useForm<FormData>>['handleSubmit'];
  setValue: ReturnType<typeof useForm<FormData>>['setValue'];
  handleCepBlur: () => Promise<void>;
  handleClear: () => void;
  onSubmit: (data: FormData) => Promise<void>;
  errors: ReturnType<typeof useForm<FormData>>['formState']['errors'];
  loading: boolean;
}

export const useCepForm = (): UseCepFormReturn => {
  const {
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
    mode: "onBlur",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleCepBlur = async () => {
    const cep = watch("cep").replace(/\D/g, "");
    const formattedCep = formatZipCode(cep);
    
    if (!/^\d{8}$/.test(cep)) {
      setError("cep", { type: "manual", message: TEXTS.cepInvalido });
      return;
    }

    setLoading(true);
    try {
      const addressData = await getAddressByCep(cep);
      
      setValue("cep", formattedCep);
      setValue("logradouro", addressData.logradouro);
      setValue("bairro", addressData.bairro);
      setValue("cidade", addressData.cidade);
      setValue("estado", addressData.estado);
      setValue("complemento", addressData.complemento);
      
    } catch (error) {
      console.error(TEXTS.erroBuscarCep, error);
      setError("cep", { 
        type: "manual", 
        message: error instanceof Error 
          ? error.message 
          : TEXTS.erroBuscarCep 
      });
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    reset();
  };

  const onSubmit = async (data: FormData) => {
    try {
      const response = await axios.post("/api/save", {
        ...data,
        cep: data.cep.replace(/\D/g, ""),
      }, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status !== 200) throw new Error(TEXTS.erroSalvar);
      
      console.log(TEXTS.sucessoSalvar);
      reset();
    } catch (error) {
      console.error(TEXTS.erroSalvar, error);
      throw error;
    }
  };

  return {
    control,
    handleSubmit,
    setValue,
    handleCepBlur,
    handleClear,
    onSubmit,
    errors,
    loading,
  };
};