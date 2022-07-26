import Head from "next/head";
import { Box, Container, Logo } from "./styles";

const LayoutLogin = ({ children }) => {
  return (
    <>
      <Head>
        <title>Login | Balerion Next</title>
        <link rel="icon" href="/dragon.png" />
      </Head>
      <Container>
        <Box>
          <Logo />
          {children}
        </Box>
      </Container>
    </>
  );
};
export default LayoutLogin;
