import dynamic from "next/dynamic";
import React from "react";
import { Container } from "../components/Container/Container";
import { MainLayout } from "../components/MainLayout/MainLayout";
import Title from "../components/Text/Title";
import Text from "../components/Text/Text";
import Stack from "../components/Stack/Stack";

const Hydra = dynamic(() => import("../containers/Hydra"), { ssr: false });

function HomePage() {
  return (
    <MainLayout>
      <Container>
        <Title>Sup, I'm Marsa</Title>
        <Hydra width="1000" height="1000"></Hydra>
        <Stack justifyContent="spaceBetween">
          <Text>FRONTEND / DESIGN SYSTEMS</Text>
          <Text>PORTFOLIO</Text>
        </Stack>
      </Container>
    </MainLayout>
  );
}

export default HomePage;
