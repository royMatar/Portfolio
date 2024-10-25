"use client";
import React from "react";
import { motion } from "framer-motion";
import { useBreakpointValue, Box, HStack, VStack } from "@chakra-ui/react";
import LinkedinIcon from "../components/icons/LinkedinIcon";
import GithubIcon from "../components/icons/GithubIcon";

const Footer = () => {
  const positionStyles = useBreakpointValue({
    base: {
      position: "fixed",
      top: "10px",
      right: "10px",
    },
    md: {
      position: "fixed",
      top: "40vh",
      right: "40px",
    },
  });

  const layout = useBreakpointValue({
    base: HStack,
    md: VStack,
  });

  const IconLayout = layout;

  return (
    <Box
      zIndex={2000}
      display="flex"
      {...positionStyles}
      // backgroundColor="black"
      borderRadius="50px"
      pt="10px"
      pb="10px"
      px={{ base: "10px", md: 0 }}
    >
      <IconLayout spacing={layout === HStack ? "10px" : "20px"}>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          style={{ perspective: 1000 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <a
            href="https://www.linkedin.com/in/roy-matar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Box
              bg="black"
              borderRadius="50%"
              p="10px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <LinkedinIcon />
            </Box>
          </a>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <a
            href="https://github.com/royMatar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Box
              bg="black"
              borderRadius="50%"
              p="10px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <GithubIcon />
            </Box>
          </a>
        </motion.div>
      </IconLayout>
    </Box>
  );
};

export default Footer;
