import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import { ThemeProvider } from "../context/ThemeContext";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
