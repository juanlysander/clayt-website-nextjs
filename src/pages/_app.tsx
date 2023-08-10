import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { NextUIProvider } from "@nextui-org/react";
import "../styles/globals.css";

const activeChain = "mumbai";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <ThirdwebProvider
        clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
        activeChain={activeChain}
      >
        <Component {...pageProps} />
      </ThirdwebProvider>
    </NextUIProvider>
  );
}

export default MyApp;
