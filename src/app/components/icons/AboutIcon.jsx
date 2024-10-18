import React from 'react';
import { motion } from 'framer-motion';
import { useBreakpointValue } from '@chakra-ui/react';

const AboutIcon = () => {
  // Use responsive sizing for the icon
  const iconSize = useBreakpointValue({ base: "40", md: "60" }); // 40x40 for small screens, 60x60 for medium and up

  return (
    <div>
      <svg
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        fill="none"
        width={iconSize}
        height={iconSize}
      >
        <defs>
          <linearGradient id="secondGradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00C6FF" />
            <stop offset="100%" stopColor="#0072FF" />
          </linearGradient>
          <linearGradient id="thirdGradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0072FF" />
            <stop offset="100%" stopColor="#00C6FF" />
          </linearGradient>
        </defs>
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <motion.circle
            cx="8"
            cy="5"
            r="3.25"
            initial={{ pathLength: 0, stroke: 'black' }}
            animate={{ pathLength: 1, stroke: 'url(#secondGradientStroke)' }}
            transition={{ duration: 1.5, delay: 2.6 }}
            stroke=""
            strokeWidth="0.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <motion.path
            d="m2.75 14.25c0-2.5 2-5 5.25-5s5.25 2.5 5.25 5"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.7"
            initial={{ pathLength: 0, stroke: 'black' }}
            animate={{ pathLength: 1, stroke: 'url(#secondGradientStroke)' }}
            transition={{ duration: 1.5, delay: 2.6 }}
          />
        </g>
      </svg>
    </div>
  );
};

export default AboutIcon;
