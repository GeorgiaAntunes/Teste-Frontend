"use client";
import { styled } from '@mui/system';
import { AppForm } from './components/AppForm/AppForm';

const HomeContainer = styled('div')`
  padding: 2rem;
  text-align: center;
`;

const HomeTitle = styled('h1')`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

export default function Home() {
  return (
    <HomeContainer>
      {/* <HomeTitle>Desafio Frontend Instivo</HomeTitle> */}
      <AppForm />
    </HomeContainer>
  );
}
