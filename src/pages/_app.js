import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";
import theme from "../styles/theme";
import Layout from "../components/Layout";
import LayoutLogin from "../components/LayoutLogin";
import Login from "./Login";

export default function App({ Component, pageProps }) {
  let isLogado = true;

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {isLogado ? (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        ) : (
          <LayoutLogin />
        )}
      </ThemeProvider>
    </>
  );
}
