import { createContext, useState, useContext } from "react";

export const LoaderContext = createContext({ loader: false, setLoader: (value: boolean) => {} });

export const LoaderContextProvider = ({ children }: any) => {
  const [loader, setLoader] = useState<boolean>(false);

  return <LoaderContext.Provider value={{ loader, setLoader }}>{children}</LoaderContext.Provider>;
};

export const UseLoaderContext = () => {
  return useContext(LoaderContext);
};
