  import { useAnimateMini } from "framer-motion";
import { createContext, useCallback, useContext, useState } from "react";
import {useNavigate} from 'react-router-dom';
  const AppContext = createContext();

  export const AppProvider = ({ children }) => {
const [Apploading,setApploading]=useState(false)
const [UserArticles,setUserArticles]=useState([])



const [alertUser, setalertUser] = useState({
  show: false,
  type: "error",
  message: "",
});

// backendurl
const BackendURl=import.meta.env.VITE_BACKEND_URL;
const navigate=useNavigate()







// fetch articles 
const HandleFetchArticle = async () => {
  try {
    setApploading(true);


    const res = await fetch(`${BackendURl}/api/user/fetch-user-article`, {
      method: "GET",
      credentials: "include",
    });

    const resultData = await res.json();

    if (resultData.success) {
    setUserArticles(resultData.articles)
console.log(resultData.articles);

    
    } else {
      setalertUser({
        show: true,
        type: "error",
        message: resultData.message,
      });
    }
  } catch (error) {
    console.log(error);

    setalertUser({
      show: true,
      type: "error",
      message: "Something went wrong.",
    });
  } finally {
    setApploading(false);
  }
};






    return (
      <AppContext.Provider
        value={{HandleFetchArticle, UserArticles}}
      >
        {children}
      </AppContext.Provider>
    );
  };

  export const useApp = () => useContext(AppContext);