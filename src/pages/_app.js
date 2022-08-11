import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";
import theme from "../styles/theme";
import Layout from "../components/Layout";
import LayoutLogin from "../components/LayoutLogin";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [isSignedIn, setIsSingedIn] = useState(true);
  useEffect(() => {
    if (router.pathname == "/404" || router.pathname.startsWith("/auth/")) {
      setIsSingedIn(false);
    } else if (router.pathname == "/login") {
      router.push("/auth/login");
      setIsSingedIn(false);
    } else {
      setIsSingedIn(true);
    }
  }, [router.pathname]);
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
//Como ainda nao finalizei a api, o teste para qual layout mostrar é só o
//nome da pagina, ainda nao valida se esta realmente logado
