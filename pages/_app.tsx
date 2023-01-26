import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Inter } from "@next/font/google";
import { wrapper } from "../redux/store";

const inter = Inter({ subsets: ["latin"] });
function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  );
}

export default wrapper.withRedux(App);
