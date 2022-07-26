import { Container, Wrapper } from "./styles";
import Search from "../Search";
import Menu from "../Menu";
import Head from "next/head";
import SideBar from "../SideBar";
//search
function Layout({ children }) {
  const isSearch = children.type.name === "Search";
  return (
    <>
      <Head>
        <title>Balerion Next</title>
        <link rel="icon" href="/dragon.png" />
      </Head>

      <Container>
        <Wrapper>
          <Menu />
          {children}
          <SideBar>{!isSearch && <Search />}</SideBar>
        </Wrapper>
      </Container>
    </>
  );
}

export default Layout;
