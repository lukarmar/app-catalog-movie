import { ReactNode } from "react";

import { CatalogDataProvider } from "./getDataMovies";

const MainProvider = ({ children }: { children: ReactNode }) => {
  return (
    <CatalogDataProvider>
      {children}
    </CatalogDataProvider>
  );
};

export default MainProvider;