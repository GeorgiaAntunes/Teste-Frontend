"use client";
import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

export const StyledTextField = styled(TextField)`
  font-size: 0.875rem;
  color: ${(p) => p.theme.palette.text.primary};

  & .MuiInputBase-root {
    padding: 12px;
    color: ${(p) => p.theme.palette.text.primary}; 
    background-color: ${(p) => p.theme.palette.primary.dark};
    border-radius: 5px;
  }

  & .MuiOutlinedInput-input {
    padding: 6px;
    color: ${(p) => p.theme.palette.text.primary}; 
  }

  & .MuiInputLabel-root {
    color: ${(p) => p.theme.palette.text.primary};
    font-weight: 400;
  }

  & .MuiOutlinedInput-notchedOutline {
    border: none;
  }

  & .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border: 1px solid ${(p) => p.theme.palette.secondary.main};
  }

  & .MuiInputBase-input::placeholder {
    color: ${(p) => p.theme.palette.secondary.main};
  }

  &.Mui-error .MuiOutlinedInput-notchedOutline {
    outline: 1px solid ${(p) => p.theme.palette.error.main};
  }

  &.Mui-error .MuiFormHelperText-root {
    color: ${(p) => p.theme.palette.error.main};
    font-size: 0.75rem;
  }

  &.Mui-success .MuiOutlinedInput-notchedOutline {
    outline: 1px solid ${(p) => p.theme.palette.success.main};
  }

  &.Mui-success .MuiFormHelperText-root {
    color: ${(p) => p.theme.palette.success.main};
    font-size: 0.75rem;
  }
`;

export const InputContainer = styled("div")`
  width: 100%;

  @media (max-width: 768px) {
    margin: 8px 0;
  }

  @media (max-width: 480px) {
    margin: 6px 0;
  }
`;
