"use client";
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Container } from '@mui/system';


export const Header = styled(Typography)`
  font-size: 1.2rem;
  font-weight: 400;
  color: ${(p) => p.theme.palette.white};
  margin-bottom: 1rem;
  text-align: start;
`;

export const FormContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: ${(p) => p.theme.palette.primary.light};
  border-radius: 8px;
  width: 100%;
  max-width: 500px;

  @media (min-width: 768px) {
    width: 40%;
  }

  @media (max-width: 1024px) {
    width: 70%;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 100%;
    padding: 1rem;
  }
`;

export const StyledForm = styled("form")`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ButtonContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1.5rem;

  @media (max-width: 480px) {
    margin-top: 1rem;
  }
`;

export const LoadingContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;

  @media (max-width: 768px) {
    margin: 0.8rem 0;
  }
`;
