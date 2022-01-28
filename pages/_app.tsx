import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontWeight: 300,
        color: "black",
        lineHeight: 1.2,
        background: "linear-gradient(135deg,#e09,#d0e)",
      },
      "#__next": {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      },
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
