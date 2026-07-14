import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "./Navbar";
import AnimatedBg from "./AnimatedBg";
import HeroSection from "./HeroSection";
import WhatYouGet from "./WhatYouGet";
import ResearchLibrary from "./ResearchLibrary";
import PricingSection from "./PricingSection";
import { useAuth } from "../context/AuthContext";
import UserDashboard from "./userDashboard";

function HomePage() {
  const location = useLocation();
const { isLoggedIn,CheckAuthme} = useAuth();

  const isPlansPage = location.pathname === "/plans";
console.log(isLoggedIn);

useEffect(() => {
  CheckAuthme();
}, [CheckAuthme]);
  return (
    <>
    <div className="min-h-screen  text-slate-100 font-sans relative overflow-hidden">
      <AnimatedBg />

      <Navbar/>

      {
      
      isLoggedIn?
      
      <div className="mt-26" >

      <UserDashboard/>
      </div>:(

        <>
          <HeroSection />
          <WhatYouGet />
          <ResearchLibrary />
          <PricingSection />
        </>
      )
      }
    </div>
    </>
  );
}

export default HomePage;