"use client";
import { styled } from '@mui/material/styles';
import { Container } from '@mui/system';

export const FormContainer = styled(Container)`
    display: flex;
  justify-content: center;
  align-items: center;    
  height: 70vh;           
  width: 100%;   
`;

export const InputContainer = styled('div')`
//   background-color: red;
//   width: 100%;  
`;

export const InputField = styled('input')`
  
  font-size: 1rem;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color:rgb(127, 74, 176);
  }
`;

export const Error = styled('span')`
  color: red;
  font-size: 0.875rem;
`;

export const ButtonContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const LoadingText = styled('p')`
  font-size: 1rem;
  color:rgb(89, 85, 207);
  text-align: center;
`;
