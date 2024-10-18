'use client'
import React from 'react';
import { motion } from 'framer-motion';

const HeartbeatSignal = () => {
  return (
    <motion.svg
      width="50"
      height="50"
      viewBox="0 0 30 30"
      xmlns="http://www.w3.org/2000/svg"

    >
     
     <motion.path
        d="M3 12H9L12 5L14 18.5L17.5 12H21.5"
        stroke="url(#secondGradientStroke)"
        strokeWidth="3"  // Start with a thicker line
        fill="none"
        initial={{ pathLength: 0, strokeWidth: 1 }}
        animate={{ 
          pathLength: 1,
          strokeWidth: [1, 3, 1], // Pulsating effect
          scale: [1, 1.1, 1], // Slight scale effect
        }}
        transition={{ 
          delay:4,
          duration: 1, 
          repeat: Infinity, 
          ease: "easeInOut",
          times: [0, 0.5, 1], // Custom timing for each stage
        }}
      />
       
    </motion.svg>
  );
};

export default HeartbeatSignal;
