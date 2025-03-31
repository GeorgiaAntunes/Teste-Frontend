import { Controller, Control, FieldValues, Path } from "react-hook-form";
import { StyledTextField } from "./FormInput.style";
import { ChangeEvent } from "react";
import { TextFieldProps } from "@mui/material";

interface FormInputProps<T extends FieldValues> extends Omit<TextFieldProps, 'name' | 'error'> {
  name: Path<T>;
  control: Control<T>;
  placeholder: string;
  errorMessage?: string; 
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  "data-testid"?: string;
}

const FormInput = <T extends FieldValues>({
  name,
  control,
  placeholder,
  errorMessage,
  onBlur,
  onChange,
  "data-testid": dataTestId,
  ...props
}: FormInputProps<T>) => {
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
          onBlur={(e) => {
            field.onBlur();
            onBlur?.(e);
          }}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            field.onChange(e);
            onChange?.(e);
          }}
          error={!!errorMessage} // Convertemos para boolean
          helperText={errorMessage}
          inputProps={{
            "data-testid": dataTestId || `input-${name}`,
            ...props.inputProps
          }}
          {...props}
        />
      )}
    />
  );
};

export default FormInput;