import { Control, Controller } from "react-hook-form";
import { StyledTextField } from "./FormInput.style";

interface FormInputProps {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  placeholder: string;
  error?: string;
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
          fullWidth
          variant="outlined"
          placeholder={placeholder}
          error={!!error}
          helperText={error}
          onBlur={(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            field.onBlur();
            onBlur?.(e);
          }}
        />
      )}
    />
  );
};

export default FormInput;
