import axios from "axios";

interface ViaCepResponse {
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  erro?: boolean;
}

export const getAddressByCep = async (cep: string) => {
  try {
    const { data } = await axios.get<ViaCepResponse>(
      `https://viacep.com.br/ws/${cep}/json/`
    );

    if (data.erro) {
      throw new Error("CEP não encontrado");
    }

    return {
      logradouro: data.logradouro || "",
      bairro: data.bairro || "",
      complemento: data.complemento || "",
      cidade: data.localidade || "",  
      estado: data.uf || "",      
    };
  } catch (error) {
    console.error("Erro ao buscar CEP:", error);
    throw error;
  }
};