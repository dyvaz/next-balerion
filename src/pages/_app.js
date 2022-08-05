import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";
import theme from "../styles/theme";
import Layout from "../components/Layout";
import LayoutLogin from "../components/LayoutLogin";
import Router from "next/router";
import React, { useEffect } from "react";

export default function App({ Component, pageProps }) {
  let isSignedIn = true;
  let er = false;
  //let public = ["/auth", "/404", "/profile"];
  useEffect(() => {
    const { pathname } = Router;
    er = pathname === "/404";
    console.log(er);
    console.log(pathname);

    if (!pathname.includes("/auth") && !isSignedIn) {
      Router.push("/auth/login");
    }
    //quando logado, qualquer outra rota leva para um perfil
    if (isSignedIn && pathname == "/login") {
      Router.push("/home");
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        {isSignedIn ? (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        ) : (
          <LayoutLogin>
            <Component {...pageProps} />
          </LayoutLogin>
        )}
      </ThemeProvider>
    </>
  );
}
