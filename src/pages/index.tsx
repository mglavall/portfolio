import dynamic from "next/dynamic";
import React from "react";
import { Container } from "../components/Container/Container";
import { MainLayout } from "../components/MainLayout/MainLayout";
import Title from "../components/Text/Title";
import Text from "../components/Text/Text";
import Stack from "../components/Stack/Stack";
import { Link } from "../components/Link/Link";

const Hydra = dynamic(() => import("../containers/Hydra"), { ssr: false });

function HomePage() {
  return (
    <MainLayout>
      <Container>
        <Title css={{ my: "$3" }}>Sup, I'm Marsa</Title>
        <Hydra width="1000" height="1000"></Hydra>
        <Stack justifyContent="spaceBetween" css={{ marginTop: "$3" }}>
          <Text>
            A FRONTEND ENGINEER WITH A KEEN INTEREST IN ART AND DESIGN
          </Text>
          <Stack direction="column">
            <Link as="a" css={{ marginBottom: "$1" }}>
              GITHUB
            </Link>
            <Link as="a">TWITTER</Link>
          </Stack>
        </Stack>
      </Container>
    </MainLayout>
  );
}

export default HomePage;
