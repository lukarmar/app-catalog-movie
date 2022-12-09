import {
  useCallback,
  useState,
  createContext,
  ReactNode,
  useContext,
} from "react";


import api from "../api";



import { PropsCardActionsData } from '../types/cardMovieProps'



interface PropsData {
  getData: () => void;
  updateData: () => void;
  dataCardCatalog: PropsCardActionsData[];
  loading: boolean;

}


const CatalogDataMovieContext = createContext<PropsData>({} as PropsData);



const CatalogDataProvider = ({ children }: { children: ReactNode }) => {

  const [dataCardCatalog, setDataCardCatalog] = useState<PropsCardActionsData[]>([]);
  const [loading, setLoading] = useState(false);

  const getData = useCallback(() =>{
    setLoading(true)

    api.get('/catalog').then(response => {
      setDataCardCatalog(response.data);
      setLoading(false)
    })    
 

  },[])

  const updateData = useCallback(() => {
    setLoading(true)

    api.post('/catalog').then(() => getData())


  }, [getData])


  return (
    <CatalogDataMovieContext.Provider value={{ getData, updateData, dataCardCatalog, loading }}>
      {children}
    </CatalogDataMovieContext.Provider>
  )

}

function useCatalogData(): PropsData {
  const context = useContext(CatalogDataMovieContext);

  if (!context) {
    throw new Error("useCatalogData must be used within an CatalogDataProvider");
  }

  return context;
}

export { CatalogDataProvider, useCatalogData };