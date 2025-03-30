import {  Controller } from "react-hook-form";
import { StyledTextField } from "./FormInput.style";
import { ChangeEvent } from "react";

interface FormInputProps {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  placeholder: string;
  error?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void; 
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({
  name,
  control,
  placeholder,
  error,
  onBlur,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <StyledTextField
        {...field}
        label={placeholder}
        variant="outlined"
        fullWidth
        margin="normal"
        onBlur={onBlur}
        error={!!error}
        helperText={error}
        />
      )}
    />
  );
};

export default FormInput;
