import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/common/layout/header/index";
import Footer from "../components/common/layout/Footer/index";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />;
      <Footer />
    </>
  );
}

export default MyApp;
