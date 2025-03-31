import { Box, CircularProgress } from "@mui/material";
import { useCepForm } from "@/app/viewmodels/useCepForm";
import { ButtonContainer, FormContainer, StyledForm } from "./AppForm.style";
import { InputContainer } from "../FormInput/FormInput.style";
import FormInput from "../FormInput/FormInput";
import { FormButton } from "../FormButton/FormButton";
import { formatZipCode } from "@/app/utils/zipCodeMask";

export const AppForm: React.FC = () => {
  const { control, handleSubmit, handleCepBlur, handleClear, onSubmit, errors, loading, setValue } = useCepForm();
  
  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maskedCep = formatZipCode(e.target.value); 
    setValue("cep", maskedCep); 
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit(onSubmit)} data-testid="address-form">
        <InputContainer>
          <FormInput
            name="cep"
            control={control}
            placeholder="CEP"
            onBlur={handleCepBlur}
            onChange={handleCepChange}
            errorMessage={errors.cep?.message}
            data-testid="cep-input"
          />
        </InputContainer>

        <InputContainer>
          <FormInput
            name="logradouro"
            control={control}
            placeholder="Logradouro"
            errorMessage={errors.logradouro?.message}
            data-testid="street-input"
          />
        </InputContainer>

        <InputContainer>
          <FormInput
            name="complemento"
            control={control}
            placeholder="Complemento"
            data-testid="complement-input"
          />
        </InputContainer>

        <InputContainer>
          <FormInput
            name="bairro"
            control={control}
            placeholder="Bairro"
            errorMessage={errors.bairro?.message}
            data-testid="district-input"
          />
        </InputContainer>

        <InputContainer>
          <FormInput
            name="cidade"
            control={control}
            placeholder="Cidade"
            errorMessage={errors.cidade?.message}
            data-testid="city-input"
          />
        </InputContainer>

        <InputContainer>
          <FormInput
            name="estado"
            control={control}
            placeholder="Estado"
            errorMessage={errors.estado?.message}
            data-testid="state-input"
          />
        </InputContainer>

        {loading && (
          <Box display="flex" justifyContent="center" my={2} data-testid="loading-indicator">
            <CircularProgress />
          </Box>
        )}

        <ButtonContainer>
          <FormButton 
            onClick={handleClear} 
            label="Limpar" 
            data-testid="clear-button"
          />
          <FormButton 
            type="submit" 
            label="Salvar" 
            data-testid="submit-button"
          />
        </ButtonContainer>
      </StyledForm>
    </FormContainer>
  );
};