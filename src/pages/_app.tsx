import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import Layout from "@/components/Layout/Layout";
import { Toaster } from "react-hot-toast";

config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  // Page without Layout
  if (Component.name === "Login" || Component.name === "SignUp") {
    return (
      <>
        <Component {...pageProps} />
        <Toaster position="top-right" reverseOrder={false} />
      </>
    );
  }

  // Page with Layout
  return (
    <Layout>
      <Component {...pageProps} />
      <Toaster position="top-right" reverseOrder={false} />
    </Layout>
  );
}
