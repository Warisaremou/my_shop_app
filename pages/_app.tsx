import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import "@/styles/index.css";
import { Navbar } from "@/components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Navbar>
        <Component {...pageProps} />
      </Navbar>
    </ThemeProvider>
  );
}
