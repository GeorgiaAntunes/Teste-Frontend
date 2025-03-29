import * as z from "zod";

export const schema = z.object({
  cep: z.string().min(8, "CEP inválido").max(9, "CEP inválido"),
  logradouro: z.string().min(1, "Obrigatório"),
  complemento: z.string().optional(),
  bairro: z.string().min(1, "Obrigatório"),
  cidade: z.string().min(1, "Obrigatório"),
  estado: z.string().length(2, "UF inválida"),
});
