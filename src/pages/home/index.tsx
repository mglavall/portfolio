import { Container } from "~/src/components/Container/Container";
import dynamic from "next/dynamic";
import { Link } from "~/src/components/Link/Link";
import { MainLayout } from "~/src/components/MainLayout/MainLayout";
import Stack from "~/src/components/Stack/Stack";
import Title from "~/src/components/Text/Title";
import Text from "~/src/components/Text/Text";
import Checkbox from "~/src/components/Form/Checkbox/Checkbox";
const Hydra = dynamic(() => import("../../containers/Hydra"), { ssr: false });

const Home = () => (
  <MainLayout>
    <Container>
      <Title css={{ my: "$3" }}>Oscillating</Title>

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
      <Checkbox></Checkbox>
    </Container>
  </MainLayout>
);

export default Home;
