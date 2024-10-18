"use client";
import React from "react";
import Link from "next/link";
import LinkedinIcon from "../components/icons/LinkedinIcon";
import GithubIcon from "../components/icons/GithubIcon";
import { motion } from "framer-motion";
import { useBreakpointValue, Box, HStack, VStack } from "@chakra-ui/react";

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
      right:'40px'
    },
  });

  // Determine the layout type based on screen size
  const layout = useBreakpointValue({
    base: HStack,
    md: VStack,
  });

  const IconLayout = layout;

  return (
    <Box zIndex={2000} display="flex" {...positionStyles}>
      <IconLayout spacing={layout === HStack ? "10px" : "20px"}>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          style={{ perspective: 1000 }}
        >
          <Link href="/">
            <LinkedinIcon />
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link href="/about">
            <GithubIcon />
          </Link>
        </motion.div>
      </IconLayout>
    </Box>
  );
};

export default Footer;
