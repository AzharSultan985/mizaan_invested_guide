  import { useAnimateMini } from "framer-motion";
import { createContext, useCallback, useContext, useState } from "react";
import {useNavigate} from 'react-router-dom';
  const AuthContext = createContext();

  export const AuthProvider = ({ children }) => {

    const [Authloading,setAuthloading]=useState(false);
const navigate =useNavigate();

    // ==========================
    // Authentication APIs
    // ==========================
const [alert, setAlert] = useState({
  show: false,
  type: "error",
  message: "",
});
const [isLoggedIn,setisLoggedIn]=useState(false);
const [UserData,setUserData]=useState();




  const BackendURL = import.meta.env.VITE_BACKEND_URL;



    const signup = async (userData) => {
  try {
    setAuthloading(true)
    console.log('yserdata',userData);
  const response = await fetch(`${BackendURL}/api/auth/registeruser`, {
    method: "POST",
      credentials: "include",

    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),

  });      


  const resultData =await response.json();

        if (resultData.success) {
          setAlert({
  show: true,
  type: "success",
  message: "Account created successfully!",
})

navigate("/user/auth/verifemail", {
  state: {
    email: userData.email,
  },
});

        }else{
  
   setAlert({
  show: true,
  type: "error",
  message: resultData.message,
});

}




  } catch (error) {
          console.log(error)
    
  }finally {
      setAuthloading(false);
  }
    };







    const Login = async (userData) => {
  try {
    setAuthloading(true)
  const response = await fetch(`${BackendURL}/api/auth/loginuser`, {
    method: "POST",
      credentials: "include",

    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),

  });      


  const resultData =await response.json();

        if (resultData.success) {
          setAlert({
  show: true,
  type: "success",
  message:  resultData.message
})

navigate('/');
        }else{
  
   setAlert({
  show: true,
  type: "error",
  message: resultData.message,
});

}




  } catch (error) {
          console.log(error)
    
  }finally {
      setAuthloading(false);
  }
    };



//verify otp 

const verifyOTP=async (otp)=>{
try {
  setAuthloading(true);
 const response = await fetch(`${BackendURL}/api/auth/verify-otp`, {
    method: "POST",
      credentials: "include",

    headers: {
      "Content-Type": "application/json",
    },
  body: JSON.stringify( otp)

  });      


  const resultData =await response.json();


        if (resultData.success) {
          setAlert({
  show: true,
  type: "success",
  message: "Email Verified successfully! redirect to login...",
})

navigate("user/auth")

        }else{
  
   setAlert({
  show: true,
  type: "error",
  message: resultData.message,
});

}




} catch (error) {
  console.log(error);
  
}finally {
      setAuthloading(false);
  }



}



//resend otp

const ResendOTP=async (email)=>{
try {
  setAuthloading(true);
 const response = await fetch(`${BackendURL}/api/auth/resend-verify-otp`, {
    method: "POST",
      credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },body:JSON.stringify({email})
  });      


  const resultData =await response.json();


        if (resultData.success) {
          setAlert({
  show: true,
  type: "success",
  message: resultData.message
})

        }else{
  
   setAlert({
  show: true,
  type: "error",
  message: resultData.message,
});

}




} catch (error) {
  console.log(error);
  
}finally {
      setAuthloading(false);
  }



}


// forget password 

const ForgetPassword=async (email)=>{
try {
  setAuthloading(true);
 const response = await fetch(`${BackendURL}/api/auth/forgot-password`, {
    method: "POST",
      credentials: "include",

    headers: {
      "Content-Type": "application/json",
    },
  body: JSON.stringify({
  email,
})
  });      


  const resultData =await response.json();


        if (resultData.success) {
          setAlert({
  show: true,
  type: "success",
  message:resultData.message,
})

navigate("user/auth/forget-password-verify-otp",{
  state: {
    email
  },
})

        }else{
  
   setAlert({
  show: true,
  type: "error",
  message: resultData.message,
});

}




} catch (error) {
  console.log(error);
  
}finally {
      setAuthloading(false);
  }



}


// forgot password email otp verify

const ForgotverifyOTP=async (otp,userEmail)=>{
try {
  setAuthloading(true);
 const response = await fetch(`${BackendURL}/api/auth/forgot-verify-otp`, {
    method: "POST",
      credentials: "include",

    headers: {
      "Content-Type": "application/json",
    },
  body: JSON.stringify({otp,email:userEmail})

  });      


  const resultData =await response.json();


        if (resultData.success) {
          setAlert({
  show: true,
  type: "success",
  message:resultData.message,
})

navigate("/user/auth/changePassword");
        }else{
  
   setAlert({
  show: true,
  type: "error",
  message: resultData.message,
});

}




} catch (error) {
  console.log(error);
  
}finally {
      setAuthloading(false);
  }



}



// change password

const ChangePassword=async (password)=>{
try {
  setAuthloading(true);
 const response = await fetch(`${BackendURL}/api/auth/changePassoword`, {
    method: "POST",
      credentials: "include",

    headers: {
      "Content-Type": "application/json",
    },
  body: JSON.stringify({password})

  });      


  const resultData =await response.json();


        if (resultData.success) {
          setAlert({
  show: true,
  type: "success",
  message:resultData.message,
})

navigate("/user/auth");
        }else{
  
   setAlert({
  show: true,
  type: "error",
  message: resultData.message,
});

}




} catch (error) {
  console.log(error);
  
}finally {
      setAuthloading(false);
  }



}


// check auth 

const CheckAuthme = useCallback(async () => {
  try {
    setAuthloading(true);

    const response = await fetch(`${BackendURL}/api/auth/check-me`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const resultData = await response.json();

    if (resultData.success) {
      setisLoggedIn(true);
      setUserData(resultData.user)
    } else {
      setisLoggedIn(false);

     
    }
  } catch (error) {
    console.error(error);
    setisLoggedIn(false);
  } finally {
    setAuthloading(false);
  }
}, [BackendURL]);


//logout 

const Logout = async () => {
  try {
    setAuthloading(true);

    const response = await fetch(`${BackendURL}/api/auth/logout`, {
      method: "post",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const resultData = await response.json();

    if (resultData.success) {
    
      setAlert({
        show: true,
        type: "success",
        message: resultData.message,
      });
      navigate('user/auth')
    } else {
     

      setAlert({
        show: true,
        type: "error",
        message: resultData.message,
      });
    }
  } catch (error) {
    console.error(error);
    setisLoggedIn(false);
  } finally {
    setAuthloading(false);
  }
}


    return (
      <AuthContext.Provider
        value={{
          // Auth
          
      signup,Login,
          Authloading,
          alert, setAlert

          ,verifyOTP,ResendOTP,ForgetPassword,ForgotverifyOTP,ChangePassword,isLoggedIn,setisLoggedIn,CheckAuthme,Logout,UserData
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };

  export const useAuth = () => useContext(AuthContext);