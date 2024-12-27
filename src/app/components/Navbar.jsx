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
      backgroundColor={{ base: "black", md: "transparent" }}
      minW={{ base: "100vw", md: "auto" }}
      h={{ base: "10vh", md: "50vh" }}
      position={{ base: "fixed", md: "sticky" }}
      bottom={{ base: 0, md: "auto" }}
      left={{ base: 0, md: "40px" }}
      paddingBottom={{ base: "env(safe-area-inset-bottom)", md: "0" }}
      borderRadius={{ base: "0", md: "50px" }}
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
        {[
          { href: "/", icon: <HomeIcon /> },
          { href: "/about", icon: <AboutIcon /> },
          { href: "/portfolio", icon: <PortfolioIcon /> },
          { href: "/contact", icon: <ContactIcon /> },
        ].map(({ href, icon }, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <ListItem mt={{ base: 0, md: "30px" }}>
              <Link href={href}>
                <Box
                  bg="black"
                  borderRadius="50%"
                  p="10px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  {icon}
                </Box>
              </Link>
            </ListItem>
          </motion.div>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default Navbar;
