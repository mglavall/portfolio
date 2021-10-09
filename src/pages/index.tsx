import dynamic from "next/dynamic";
import React from "react";
import { Container } from "../components/Container/Container";
import { MainLayout } from "../components/MainLayout/MainLayout";
import Title from "../components/Text/Title";
import Text from "../components/Text/Text";
import Stack from "../components/Stack/Stack";
import { Link } from "../components/Link/Link";
import Head from "next/head";

const Hydra = dynamic(() => import("../containers/Hydra"), { ssr: false });

function HomePage() {
  return (
    <MainLayout>
      <Container>
        <Title css={{ my: "$3" }}>Oscillate my ass</Title>

        <Hydra width="1000" height="1000"></Hydra>
        <Stack justifyContent="spaceBetween" css={{ marginTop: "$3" }}>
          <Text>COME LOOP THROUGH SPACE AND TIME</Text>
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
