  import { useAnimateMini } from "framer-motion";
import { createContext, useCallback, useContext, useState } from "react";
import {useNavigate} from 'react-router-dom';
  const AdminContext = createContext();

  export const AdminProvider = ({ children }) => {
const [loading,setloading]=useState(false)
const [alertUser, setalertUser] = useState({
  show: false,
  type: "error",
  message: "",
});

// backendurl
const BackendURl=import.meta.env.VITE_BACKEND_URL;


const navigate=useNavigate()






const HandleArticle = async (data) => {0
  try {
    setloading(true);

    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("slug", data.slug);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("access", data.access);
    formData.append("content", data.content);

    // Cover Image
    if (data.coverImage?.file) {
      formData.append("coverImage", data.coverImage.file);
    }

    // Gallery Images
    data.articleImages.forEach((img) => {
      formData.append("articleImages", img.file);
    });

    const res = await fetch(`${BackendURl}/api/user/create-article`, {
      method: "POST",
      credentials: "include",
      body: formData,
    });

    const resultData = await res.json();

    if (resultData.success) {
      setalertUser({
        show: true,
        type: "success",
        message: resultData.message,
      });

      navigate("/admin")
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
    setloading(false);
  }
};








    return (
      <AdminContext.Provider
        value={{ HandleArticle  ,loading,setloading , alertUser, setalertUser}}
      >
        {children}
      </AdminContext.Provider>
    );
  };

  export const useAdmin = () => useContext(AdminContext);