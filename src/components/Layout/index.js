import { Container, Wrapper } from "./styles";
import SideBar from "../../pages/SideBar";
import Menu from "../Menu";
import Head from "next/head";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Balerion Next</title>
        <link rel="icon" href="dragon.png" />
      </Head>

      <Container>
        <Wrapper>
          <Menu />
          {children}
          <SideBar />
        </Wrapper>
      </Container>
    </>
  );
}

export default Layout;
