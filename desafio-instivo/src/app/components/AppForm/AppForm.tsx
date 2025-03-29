

import { Box, CircularProgress } from "@mui/material";
import FormInput from "../FormInput";
import { FormButton } from "../FormButton";
import { useCepForm } from "@/app/viewmodels/useCepForm";
import { ButtonContainer, FormContainer, InputContainer } from "./AppForm.style";



export const AppForm: React.FC = () => {
  const { control, handleSubmit, handleCepBlur, handleClear, onSubmit, errors, loading } = useCepForm();

  return (
    <FormContainer>
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <FormInput
          name="cep"
          control={control}
          placeholder="CEP"
          onBlur={handleCepBlur}
          error={errors.cep?.message}
        />
      </InputContainer>

      <InputContainer>
        <FormInput
          name="logradouro"
          control={control}
          placeholder="Logradouro"
          error={errors.logradouro?.message}
        />
      </InputContainer>

      <InputContainer>
        <FormInput
          name="complemento"
          control={control}
          placeholder="Complemento"
        />
      </InputContainer>

      <InputContainer>
        <FormInput
          name="bairro"
          control={control}
          placeholder="Bairro"
          error={errors.bairro?.message}
        />
      </InputContainer>

      <InputContainer>
        <FormInput
          name="cidade"
          control={control}
          placeholder="Cidade"
          error={errors.cidade?.message}
        />
      </InputContainer>

      <InputContainer>
        <FormInput
          name="estado"
          control={control}
          placeholder="Estado"
          error={errors.estado?.message}
        />
      </InputContainer>

      {loading && (
        <Box display="flex" justifyContent="center" my={2}>
          <CircularProgress />
        </Box>
      )}

      <ButtonContainer>
        <FormButton onClick={handleClear} label="Limpar" />
        <FormButton type="submit" label="Salvar" />
      </ButtonContainer>
    </form>
    </FormContainer>
  );
};
