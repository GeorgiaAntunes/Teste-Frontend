"use client";
import { styled } from '@mui/system';
import { AppForm } from './components/AppForm/AppForm';

const HomeContainer = styled('div')`
  padding: 2rem;
  text-align: center;
`;

const HomeTitle = styled('h1')`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

export default function Home() {
  return (
    <HomeContainer>
      <HomeTitle>Bem-vindo à Home Page</HomeTitle>
      <AppForm />
    </HomeContainer>
  );
}
