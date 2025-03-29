import React from "react";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

interface FormInputProps {
  name: string;
  control: any;
  placeholder: string;
  error?: string;
  onBlur?: () => void;
}

const FormInput: React.FC<FormInputProps> = ({ name, control, placeholder, error, onBlur }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
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
