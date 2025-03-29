"use client";
import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

export const StyledTextField = styled(TextField)`
  font-size: 0.875rem;
  color: #eee;

  & .MuiInputBase-root {
    padding: 12px;
    color: #eee; 
    background-color: #336D82;
    border-radius: 5px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  & .MuiOutlinedInput-input {
    padding: 6px;
    color: #eee; 
  }

  & .MuiInputLabel-root {
    color: #eee;
    font-weight: 400;
  }

  & .MuiOutlinedInput-notchedOutline {
    border: none;
  }

  & .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border: 1px solid #999;
  }

  & .MuiInputBase-input::placeholder {
    color: #999;
  }

  &.Mui-error .MuiOutlinedInput-notchedOutline {
    outline: 1px solid rgb(255, 72, 72);
  }

  &.Mui-error .MuiFormHelperText-root {
    color: rgb(255, 72, 72);
    font-size: 0.75rem;
  }

  &.Mui-success .MuiOutlinedInput-notchedOutline {
    outline: 1px solid #4caf50;
  }

  &.Mui-success .MuiFormHelperText-root {
    color: #4caf50;
    font-size: 0.75rem;
  }
`;

export const InputContainer = styled("div")`
  width: 100%;
  margin: 10px 0;

  @media (max-width: 768px) {
    margin: 8px 0;
  }

  @media (max-width: 480px) {
    margin: 6px 0;
  }
`;
