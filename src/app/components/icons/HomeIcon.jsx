import React from 'react';
import { motion } from 'framer-motion';
import { useBreakpointValue } from "@chakra-ui/react";
const HomeIcon = () => {
  const iconSize = useBreakpointValue({ base: "40", md: "60" });

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width={iconSize}
        height={iconSize}
      >
        <defs>
          <linearGradient id="firstGradientStroke" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#FF7E5F" />
            <stop offset="100%" stopColor="#FEB47B" />
          </linearGradient>
        </defs>
        <motion.path
          d="M4 11.4522V16.8002C4 17.9203 4 18.4807 4.21799 18.9086C4.40973 19.2849 4.71547 19.5906 5.0918 19.7823C5.5192 20.0001 6.07899 20.0001 7.19691 20.0001H16.8031C17.921 20.0001 18.48 20.0001 18.9074 19.7823C19.2837 19.5906 19.5905 19.2849 19.7822 18.9086C20 18.4811 20 17.9216 20 16.8037V11.4522C20 10.9179 19.9995 10.6506 19.9346 10.4019C19.877 10.1816 19.7825 9.97307 19.6546 9.78464C19.5102 9.57201 19.3096 9.39569 18.9074 9.04383L14.1074 4.84383C13.3608 4.19054 12.9875 3.86406 12.5674 3.73982C12.1972 3.63035 11.8026 3.63035 11.4324 3.73982C11.0126 3.86397 10.6398 4.19014 9.89436 4.84244L5.09277 9.04383C4.69064 9.39569 4.49004 9.57201 4.3457 9.78464C4.21779 9.97307 4.12255 10.1816 4.06497 10.4019C4 10.6506 4 10.9179 4 11.4522Z"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          initial={{ pathLength: 0, stroke:'black' }}
          animate={{ pathLength: 1, stroke:'url(#secondGradientStroke)' }}
          transition={{ duration: 1.5, delay: 2.3 }}
        />
      </svg>
    </div>
  );
};

export default HomeIcon;
