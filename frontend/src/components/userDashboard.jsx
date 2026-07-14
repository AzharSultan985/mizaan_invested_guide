import { motion } from "framer-motion";
import { LayoutDashboard } from "lucide-react";
import HeroSection from "./HeroSection";
import AboutUs from "./aboustus";
import PricingSection from "./PricingSection";
import BlogSection from "../Blogs/BlogSection.jsx";
import AnimatedBg from "./AnimatedBg.jsx";

export default function UserDashboard() {
  return (
 <>
       <AnimatedBg />

 <HeroSection/>

 {/* //AboutUs */}
 {/* <AboutUs/> */}
 
 <BlogSection/>
 {/* PricingSection */}
 <PricingSection/>
 
 
 </>
  );
}