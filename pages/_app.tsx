import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import "@/styles/index.css";
import { Navbar } from "@/components";
import Login from "./Login";
import { LoaderContextProvider } from "@/context/LoaderContext";
import Register from "./Register";
import { QueryClient, QueryClientProvider } from "react-query";
import Footer from './../components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <QueryClientProvider client={queryClient}>
      <LoaderContextProvider>
        <Navbar>
        <Component {...pageProps} />
          </Navbar> 
          <Footer ></Footer>
        <Login />
        <Register/>
      </LoaderContextProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
