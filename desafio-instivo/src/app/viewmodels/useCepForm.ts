"use client"; 
 import { useForm } from "react-hook-form";
 import { zodResolver } from "@hookform/resolvers/zod";
 import { schema } from "../schemas/cepSchema";
 import { getAddressByCep } from "../services/cepService";
 import { z } from "zod";
 import { useState } from "react";
 
 export type FormData = z.infer<typeof schema>;
 
 type AddressFields = "logradouro" | "bairro" | "cidade" | "estado";
 
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
   });
 
   const [loading, setLoading] = useState<boolean>(false);
 
   const handleCepBlur = async () => {
     const cep = watch("cep").replace(/\D/g, "");
     if (cep.length !== 8) return;
 
     setLoading(true);
     try {
       const data = await getAddressByCep(cep);
       if (data) {
         (["logradouro", "bairro", "cidade", "estado"] as AddressFields[]).forEach((field) =>
           setValue(field, data[field] || "")
         );
       }
     } catch (error) {
       console.error("Erro ao buscar CEP", error);
     } finally {
       setLoading(false);
     }
   };
 
   const handleClear = () => reset();
 
   const onSubmit = (data: FormData) => {
     console.log("Dados salvos:", data);
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