import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from "next/app";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Layout from "@/components/Layout/Layout";

config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  
  // Page without Layout
  if (Component.name === "Login" || Component.name === "SignUp") {
    return <Component {...pageProps} />;
  }

  // Page with Layout
  return(
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );

}
