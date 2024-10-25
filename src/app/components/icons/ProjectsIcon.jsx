import React from 'react';
import { motion } from 'framer-motion';
import { useBreakpointValue, Tooltip } from "@chakra-ui/react";
const ProjectsIcon = () => {
  const iconSize = useBreakpointValue({ base: "40", md: "60" });

  return (
    <Tooltip label="Portfolio" fontSize="lg" m={5} placement="right">

    <div>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={iconSize}
        height={iconSize}
      >
        <defs>
          <linearGradient id="fourthGradientStroke" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#1D976C" />
            <stop offset="100%" stopColor="#93F9B9" />
          </linearGradient>
        </defs>
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <motion.path
            d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20"
            stroke="black"  // Use the gradient for the stroke
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, stroke:'black' }}
            animate={{ pathLength: 1 , stroke:'url(#secondGradientStroke)'}}
            transition={{ duration: 1.5, delay: 2.9 }}
          />
        </g>
      </svg>
    </div>
    </Tooltip>
  );
};

export default ProjectsIcon;
