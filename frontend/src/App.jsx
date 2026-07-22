import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import AuthPage from "./Auth/AuthPage";
import PricingSection from "./components/PricingSection";
import Alert from "./components/Alert";
import { useAuth } from "./context/AuthContext";
import OtpVerification from "./Auth/ermailVerifyl";
import ForgotPassword from "./Auth/forgetpassword";
import ForgotOtpVerification from "./Auth/verifyForgotOtp";
import ChangePassword from "./Auth/changePass";
import UserDashboard from "./components/userDashboard";
import Loader from "./components/loading";
import CheckoutPage from "./components/CheckoutPage";
import ArticleDetails from "./Blogs/article.jsx";
import AdminLayout from "./Admin/AdminLayout.jsx";
import ArticlePreview from "./Admin/pages/LivePreview.jsx";

import UserAppAlert from "./components/userAlert.jsx";
import { useAdmin } from "./context/Admincontext.jsx";

export default function App() {
  const {  Authloading ,alert, setAlert} = useAuth();
  const {loading,setloading , alertUser, setalertUser } = useAdmin();
  
  useEffect(() => {
    if (alert.show) {
      const timer = setTimeout(() => {
        setAlert((prev) => ({
          ...prev,
          show: false,
        }));
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [alert.show]);

  
  useEffect(() => {
    if (alertUser.show) {
      const timer = setTimeout(() => {
        setalertUser((prev) => ({
          ...prev,
          show: false,
        }));
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [alertUser.show]);



  return (
  <>

        <Alert />
        <UserAppAlert />
        {
         ( Authloading|| loading )&& <Loader />
        }
       



      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Authentication */}
        <Route path="user/auth" element={<AuthPage />} />
        <Route path="user/auth/verifemail" element={<OtpVerification />} />
        <Route path="user/auth/forget-password" element={<ForgotPassword />} />
        <Route path="user/auth/forget-password-verify-otp" element={<ForgotOtpVerification />} />
        <Route path="user/auth/changePassword" element={<ChangePassword />} />
        <Route path="user/" element={< UserDashboard/>} />


<Route path="user/articles/:id" element={<ArticleDetails />} />




<Route
   path="/checkout"
   element={<CheckoutPage/>}
/>

<Route
   path="/admin"
   element={<AdminLayout/>}
/>
<Route
    path="/admin/articles/preview"
    element={<ArticlePreview/>}
/>
        {/* <Route path="/plans" element={<PricingSection />} /> */}

        {/* Optional 404 */}
        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white text-xl">
              404 | Page Not Found
            </div>
          }
        />
      </Routes>
 </> );
}