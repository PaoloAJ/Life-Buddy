"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import { supabase } from "../supabase-client";

function Navbar() {
  const [hideNav, setHideNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [session, setSession] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY && currentY > 50) {
        setHideNav(true);
      } else {
        setHideNav(false);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-transparent text-white p-4 transition-transform duration-600 ${
        hideNav ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav className="flex justify-between items-center w-full max-w-6xl mx-auto">
        <Link
          href="/"
          className="flex items-center space-x-2 hover:scale-115 transform transition duration-300"
        >
          <HomeIcon />
          <h1 className="text-xl font-bold">Study Buddy</h1>
        </Link>
        <div className="space-x-4 flex">
          {/* Sign Up and Sign In buttons commented out - coming soon */}
          {/* <Link
            href="/signup"
            className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-md hover:bg-gray-100 transition"
          >
            Sign Up
          </Link>
          <Link
            href="/signin"
            className="border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-blue-600 transition"
          >
            Sign In
          </Link> */}

          <Link
            href="/privacy-policy"
            className="text-white hover:text-blue-300 transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
