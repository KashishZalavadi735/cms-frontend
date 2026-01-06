import type { AppProps } from "next/app";

// Your global styles
import "@/styles/globals.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Font Awesome CSS
import "@fortawesome/fontawesome-free/css/all.min.css";

// Import toaster
import { Toaster } from "react-hot-toast";
import Layout from "@/components/Layout/Layout";
import { NextPage } from "next";

export type NextPageWithLayout = NextPage & {
  noLayout?: boolean;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Page without Layout
  if (Component.noLayout) {
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
