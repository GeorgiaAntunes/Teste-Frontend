"use client";
import { styled } from '@mui/system';
import { AppForm } from './components/AppForm/AppForm';

const HomeContainer = styled('div')`
  padding: 2rem;
  text-align: center;
`;

export default function Home() {
  return (
    <HomeContainer>
      <AppForm />
    </HomeContainer>
  );
}
