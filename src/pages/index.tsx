import dynamic from "next/dynamic";
import React from "react";
import { Container } from "../components/Container/Container";
import { MainLayout } from "../components/MainLayout/MainLayout";
import Title from "../components/Text/Title";
import Text from "../components/Text/Text";

const Hydra = dynamic(() => import("../containers/Hydra"), { ssr: false });

function HomePage() {
  return (
    <MainLayout>
      <Container>
        <Title>Sup, I'm Marsa</Title>
        <Hydra width="1000" height="1000"></Hydra>
      </Container>
    </MainLayout>
  );
}

export default HomePage;
