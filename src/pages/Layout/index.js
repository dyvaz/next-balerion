import { Container, Wrapper } from "./styles";
import Header from "../Header";
import SideBar from "../SideBar";
import Menu from "../Menu";
import Main from "../Main";
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
          <Main />
          <SideBar />
        </Wrapper>
      </Container>
    </>
  );
}

export default Layout;
