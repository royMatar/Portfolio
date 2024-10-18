"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ContactPage from '../components/ContactPage'
export default function Contact() {
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
          {/* Gradient Background Animation */}
          <motion.div
            style={{
              position: "fixed",
              bottom: 0,  // Start animation from the bottom
              left: 0,
              height: "100vh", // Set width to full
              background: "linear-gradient(to right, #00C6FF, #0072FF)",
              zIndex: 1000,
            }}
            initial={{ width: "0%" }}  // Animate height instead of width
            animate={{ width: "200%" }}  // Expand the height upwards
            transition={{ duration: 0.4 }}
          />
          {/* Black Background Animation */}
          <motion.div
            style={{
              position: "fixed",
              bottom: 0,  // Start from the bottom for the black background
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
      {showContent && <ContactPage/>}
    </>
  );
}
