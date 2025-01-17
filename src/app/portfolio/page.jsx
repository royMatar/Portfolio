"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PortfolioPage from '../components/PortfolioPage'
export default function Portfolio() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!showContent && (
        <>
          <motion.div
            style={{
              position: "fixed",
              top: 0,
              left: 0, 
              minHeight: "90vh",
              background: "linear-gradient(to right, #00C6FF, #0072FF)", 
              zIndex: 1000,
            }}
            initial={{ width: "0%" }}  
            animate={{ width: "200%" }}  
            transition={{ duration: 0.4 }}
          />
          <motion.div
            style={{
              position: "fixed",
              top: 0,
              left: 0,  
              height: "100vh",
              backgroundColor: "black",
              zIndex: 1000,
            }}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.4, delay: 0.2 }}
          />
        </>
      )}
      {showContent && <PortfolioPage/>}
    </>
  );
}
