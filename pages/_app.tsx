import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import HeaderController from "components/common/headerController/headerController";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <div>
      <HeaderController path={router.pathname} />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
