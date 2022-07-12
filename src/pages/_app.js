import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";
import theme from "../styles/theme";
import Layout from "../components/Layout";
import LayoutLogin from "../components/LayoutLogin";
import Login from "./login";

export default function App({ Component, pageProps }) {
  let isLogado = false;
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {isLogado ? (
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
