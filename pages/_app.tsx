import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import HeaderController from "components/common/headerController/headerController";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <div>
      <RecoilRoot>
        <HeaderController path={router.pathname} />
        <Component {...pageProps} />
      </RecoilRoot>
    </div>
  );
}

export default MyApp;
