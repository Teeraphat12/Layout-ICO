import "../styles/globals.css";
import type { AppProps } from "next/app";
import { FC } from "react";
import { Head } from "../components/common";

const Noop: FC = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop;

  return (
    <>
      <Head />
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default MyApp;
