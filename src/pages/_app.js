import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";
import theme from "../styles/theme";
import Layout from "../components/Layout";
import LayoutLogin from "../components/LayoutLogin";
import Router from "next/router";
import React, { useEffect } from "react";

export default function App({ Component, pageProps }) {
  let isLogged = true;
  useEffect(() => {
    console.log(isLogged);
    const { pathname } = Router;
    if (!pathname.includes("/auth") && !isLogged) {
      Router.push("/auth/login");
    }
    if (isLogged) {
      Router.push("/home");
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {isLogged ? (
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
