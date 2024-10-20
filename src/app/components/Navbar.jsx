"use client";
import React from "react";
import Link from "next/link";
import HomeIcon from "../components/icons/HomeIcon";
import PortfolioIcon from "../components/icons/ProjectsIcon";
import ContactIcon from "../components/icons/ContactIcon";
import AboutIcon from "../components/icons/AboutIcon";
import { motion } from "framer-motion";
import { Box, UnorderedList, ListItem } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box
      as="nav"
      backgroundColor={{base:'black', md:'transparent'}}
      minW={{ base: "100vw", md: "auto" }} // Full width on small screens, auto on medium and up
      h={{ base: "10vh", md: "50vh" }} // 10vh height for small screens, 50vh for medium and up
      position={{ base: "fixed", md: "sticky" }} // Fixed positioning for small screens, sticky for medium and up
      bottom={{ base: 0, md: "auto" }} // Stick to the bottom on small screens, default for larger screens
      left={{ base: 0, md: "40px" }}
      paddingBottom={{ base: "env(safe-area-inset-bottom)", md: "0" }} // Adjust for dynamic safe areas on mobile
      borderRadius={{ base: "0", md: "50px" }} // No border radius on small screens
      display="flex"
      alignItems="center"
      justifyContent="center"
      zIndex={2000}
      top={{ md: "50%" }}
      transform={{ md: "translateY(-50%)" }} 
    >
      <UnorderedList
        listStyleType="none"
        display="flex"
        flexDirection={{ base: "row", md: "column" }} 
        alignItems="center"
        justifyContent="space-around"
        w="100%"
        h="100%"
      >
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <ListItem mt={{ base: 0, md: "20px" }}>
            <Link href="/">
              <HomeIcon />
            </Link>
          </ListItem>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.2, borderRadius: "12px" }}
          whileTap={{ scale: 0.9 }}
        >
          <ListItem mt={{ base: 0, md: "30px" }}>
            <Link href="/about">
              <AboutIcon />
            </Link>
          </ListItem>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.2, borderRadius: "12px" }}
          whileTap={{ scale: 0.9 }}
        >
          <ListItem mt={{ base: 0, md: "30px" }}>
            <Link href="/portfolio">
              <PortfolioIcon />
            </Link>
          </ListItem>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <ListItem mt={{ base: 0, md: "30px" }} mb={{ base: 0, md: "20px" }}>
            <Link href="/contact">
              <ContactIcon />
            </Link>
          </ListItem>
        </motion.div>
      </UnorderedList>
    </Box>
  );
};

export default Navbar;
