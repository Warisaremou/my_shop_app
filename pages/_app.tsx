import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import "@/styles/index.css";
import { Navbar } from "@/components";
import Login from "./Login";
import { LoaderContextProvider } from "@/context/LoaderContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <LoaderContextProvider>
        {/* <Navbar>
        <Component {...pageProps} />
      </Navbar> */}
      <Login/>
      </LoaderContextProvider>
    </ThemeProvider>
  );
}
