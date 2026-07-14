import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

import {
  UserCircle2,
  LogOut,
  CircleHelp,
  ChevronDown,
  X,
  Menu,
} from "lucide-react";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('Research');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [mobileProfileOpen, setMobileProfileOpen] = useState(false);
  
  const navLinks = [
    { name: 'Research', badge: 'New' },
    { name: 'Courses', badge: null },
    { name: 'For NRPs', badge: 'Popular' },
    { name: 'Pricing', badge: null }
  ];
  
  const navigate = useNavigate();
  const { isLoggedIn, Logout, UserData } = useAuth();
  const [profileOpen, setProfileOpen] = useState(false);

  const drawerRef = useRef(null);
  const profileRef = useRef(null);

  // Handle outside click for desktop profile dropdown
  useEffect(() => {
    const handleClick = (e) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target)
      ) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Track scrolling to add rich depth when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle outside click for mobile menu drawer
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        mobileMenuOpen &&
        drawerRef.current &&
        !drawerRef.current.contains(e.target)
      ) {
        setMobileMenuOpen(false);
        setMobileProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [mobileMenuOpen]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'py-3 bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)]' 
        : 'py-6 bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex justify-between items-center relative">
        
        {/* Soft light-mode glows (Optional, kept subtle for light theme) */}
        <div className="absolute top-[-50px] left-1/4 w-[350px] h-[100px] bg-emerald-100/60 blur-[80px] pointer-events-none rounded-full" />
        <div className="absolute top-[-50px] right-1/4 w-[250px] h-[100px] bg-amber-100/60 blur-[80px] pointer-events-none rounded-full" />

        {/* Brand / Logo with 3D Perspective Hover */}
        <button 
          onClick={() => navigate("/")}
          className="group flex items-center space-x-3 text-slate-900 focus:outline-none cursor-pointer"
        >
          {/* Animated 3D geometric Logo */}
          <div className="relative w-10 h-10 transition-transform duration-500 group-hover:[transform:rotateY(180deg)] [transform-style:preserve-3d]">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-xl flex items-center justify-center shadow-[0_4px_15px_rgba(16,185,129,0.2)]">
              <span className="text-white font-black text-xl">M</span>
            </div>
            {/* Back face of the 3D cube */}
            <div className="absolute inset-0 bg-gradient-to-bl from-amber-400 to-yellow-300 rounded-xl flex items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <span className="text-slate-900 font-black text-xl">I</span>
            </div>
          </div>
          
          <div className="flex flex-col items-start">
            <span className="text-xl font-black tracking-widest text-slate-800">
              MIZAAN <span className="text-emerald-500 font-medium">INVEST</span>
            </span>
            <span className="text-[9px] text-amber-600 tracking-widest uppercase font-mono leading-none">
              Ethical Wealth Portal
            </span>
          </div>
        </button>

        {/* Centered Desktop Nav Menu */}
        <div className="hidden md:flex items-center bg-white/60 border border-slate-200 px-2 py-1.5 rounded-full relative backdrop-blur-md shadow-sm">
          {navLinks.map((link) => {
            const isActive = activeLink === link.name;
            const isHovered = hoveredLink === link.name;
            
            return (
              <button
                key={link.name}
                onClick={() => setActiveLink(link.name)}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 focus:outline-none cursor-pointer ${
                  isActive 
                    ? 'text-emerald-600' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {/* Hover Indicator */}
                {isHovered && (
                  <span className="absolute inset-0 bg-slate-100 rounded-full transition-all duration-300 transform scale-105 z-[-1]" />
                )}
                
                {/* Active Underline Bubble */}
                {isActive && (
                  <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full shadow-[0_2px_4px_rgba(16,185,129,0.3)]" />
                )}

                <span className="relative z-10 flex items-center gap-1.5">
                  {link.name}
                  {link.badge && (
                    <span className={`text-[9px] px-1.5 py-0.5 rounded-md uppercase font-bold tracking-wider leading-none ${
                      link.badge === 'New' 
                        ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' 
                        : 'bg-amber-100 text-amber-700 border border-amber-200'
                    }`}>
                      {link.badge}
                    </span>
                  )}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right CTA Area: Shimmering Button & Profile */}
        <div className="hidden md:flex items-center space-x-6 relative">
          {!isLoggedIn ? (
            <button
              onClick={() => navigate("/user/auth")}
              className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full font-bold text-white shadow-[0_4px_14px_rgba(16,185,129,0.3)] hover:shadow-[0_6px_20px_rgba(16,185,129,0.4)] hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              Get Started
            </button>
          ) : (
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2 rounded-full border border-slate-200 bg-white shadow-sm px-3 py-2 hover:border-emerald-300 hover:bg-slate-50 transition cursor-pointer"
              >
                <UserCircle2
                  size={28}
                  className="text-emerald-500"
                />
                <ChevronDown
                  size={16}
                  className={`text-slate-500 transition-transform duration-300 ${
                    profileOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-3 w-72 rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden z-50">
                  {/* Header */}
                  <div className="px-5 py-4 border-b border-slate-100 bg-slate-50/50">
                    <div className="flex items-center gap-3">
                      <UserCircle2
                        size={42}
                        className="text-emerald-500"
                      />
                      <div className="min-w-0">
                        <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                          Signed in as
                        </p>
                        <p className="font-semibold text-sm text-slate-900 truncate">
                          {UserData?.email || "User"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Menu */}
                  <div className="p-2 space-y-1">
                    <button
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition cursor-pointer"
                    >
                      <CircleHelp size={18} className="text-slate-400" />
                      Get Help
                    </button>

                    <button 
                      onClick={Logout}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition cursor-pointer"
                    >
                      <LogOut size={18} className="text-red-500" />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu Action Icon (Hamburger) */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 md:hidden"
            onClick={() => {
              setMobileMenuOpen(false);
              setMobileProfileOpen(false);
            }}
          />
        )}
        
        <div className="md:hidden z-50">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="text-slate-600 hover:text-slate-900 p-2 rounded-lg bg-white border border-slate-200 shadow-sm transition-colors"
          >
            <Menu size={24} />
          </button>
        </div>

      </div>

      {/* Slide-out Mobile Menu Drawer */}
      <div
        ref={drawerRef}
        className={`md:hidden fixed top-0 right-0 h-screen w-80 bg-white border-l border-slate-200 z-50 transition-transform duration-500 ease-out p-8 shadow-2xl overflow-y-auto ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute top-6 right-6">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              setMobileProfileOpen(false);
            }}
            className="h-10 w-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition"
          >
            <X size={20} className="text-slate-500" />
          </button>
        </div>

        <div className="flex flex-col h-full pt-16">
          <div className="space-y-2 mb-10">
            <span className="text-xs text-amber-600 tracking-widest font-mono uppercase block mb-4 ml-2">Navigation</span>
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  setActiveLink(link.name);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-xl text-lg font-bold flex items-center justify-between transition-colors ${
                  activeLink === link.name 
                    ? 'bg-emerald-50 text-emerald-600' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className={`text-[10px] px-2 py-0.5 rounded-full border ${
                    link.badge === 'New' 
                      ? 'bg-emerald-100 text-emerald-700 border-emerald-200' 
                      : 'bg-amber-100 text-amber-700 border-amber-200'
                  }`}>
                    {link.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="mt-auto relative">
            {!isLoggedIn ? (
              <button
                onClick={() => {
                  navigate("/user/auth");
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold shadow-md hover:shadow-lg transition-all"
              >
                Get Started
              </button>
            ) : (
              <>
                <button
                  onClick={() => setMobileProfileOpen(!mobileProfileOpen)}
                  className="w-full flex items-center justify-between p-4 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-slate-100 transition"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <UserCircle2 size={32} className="text-emerald-500 flex-shrink-0" />
                    <div className="text-left truncate">
                      <p className="text-xs text-slate-500 font-medium">Account</p>
                      <p className="text-sm font-bold text-slate-900 truncate">{UserData?.email}</p>
                    </div>
                  </div>
                  <ChevronDown size={18} className={`text-slate-400 transition-transform ${mobileProfileOpen ? "rotate-180" : ""}`} />
                </button>

                {mobileProfileOpen && (
                  <div className="absolute bottom-20 left-0 w-full rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-200">
                    <div className="p-2 space-y-1">
                      <button
                        onClick={() => {
                          navigate("/");
                          setMobileMenuOpen(false); 
                          setMobileProfileOpen(false);
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-100 transition"
                      >
                        <UserCircle2 size={18} className="text-slate-400" />
                        Dashboard
                      </button>

                      <button
                        onClick={() => {
                          navigate("/help");
                          setMobileMenuOpen(false);
                          setMobileProfileOpen(false);
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-100 transition"
                      >
                        <CircleHelp size={18} className="text-slate-400" />
                        Get Help
                      </button>

                      <div className="h-px bg-slate-100 my-1 w-full" />

                      <button
                        onClick={() => {
                          Logout();
                          setMobileMenuOpen(false);
                          setMobileProfileOpen(false);
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition"
                      >
                        <LogOut size={18} className="text-red-500" />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}