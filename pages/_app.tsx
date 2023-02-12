import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import "@/styles/index.css";
import { Navbar } from "@/components";
import Login from "./Login";
import { LoaderContextProvider } from "@/context/LoaderContext";
import Register from "./Register";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <QueryClientProvider client={queryClient}>
      <LoaderContextProvider>
        <Navbar>
        <Component {...pageProps} />
      </Navbar> 
        {/* <Login /> */}
        {/* <Register/> */}
      </LoaderContextProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
