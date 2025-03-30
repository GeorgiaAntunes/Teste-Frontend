import { CircularProgress } from "@mui/material";
import FormInput from "../FormInput/FormInput";
import { FormButton } from "../FormButton/FormButton";
import { useCepForm } from "@/app/viewmodels/useCepForm";
import {
  ButtonContainer,
  FormContainer,
  StyledForm,
  LoadingContainer,
  Header,
} from "./AppForm.style";
import { InputContainer } from "../FormInput/FormInput.style";
import { LABELS, TEXTS } from "@/app/constants/texts";

export const AppForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    handleCepBlur,
    handleClear,
    onSubmit,
    errors,
    loading,
  } = useCepForm();

  return (
    <FormContainer>
      <Header>{TEXTS.buscaCep}</Header>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <FormInput
            name={LABELS.cep}
            control={control}
            placeholder="CEP"
            onBlur={handleCepBlur}
            error={errors.cep?.message}
          />
        </InputContainer>

        <InputContainer>
          <FormInput
            name={LABELS.logradouro}
            control={control}
            placeholder="Logradouro"
            error={errors.logradouro?.message}
          />
        </InputContainer>

        <InputContainer>
          <FormInput
           name={LABELS.complemento}
            control={control}
            placeholder="Complemento"
          />
        </InputContainer>

        <InputContainer>
          <FormInput
            name={LABELS.bairro}
            control={control}
            placeholder="Bairro"
            error={errors.bairro?.message}
          />
        </InputContainer>

        <InputContainer>
          <FormInput
            name={LABELS.cidade}
            control={control}
            placeholder="Cidade"
            error={errors.cidade?.message}
          />
        </InputContainer>

        <InputContainer>
          <FormInput
            name={LABELS.estado}
            control={control}
            placeholder="Estado"
            error={errors.estado?.message}
          />
        </InputContainer>

        {loading && (
          <LoadingContainer>
            <CircularProgress />
          </LoadingContainer>
        )}

        <ButtonContainer>
          <FormButton onClick={handleClear} label={LABELS.limpar} />
          <FormButton type="submit" label={LABELS.salvar} />
        </ButtonContainer>
      </StyledForm>
    </FormContainer>
  );
};
