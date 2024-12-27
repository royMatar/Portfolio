import React from "react";
import { Box, Heading, Button, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";

// Define motion components for easier usage
const MotionHeading = motion(Heading);
const MotionButton = motion(Button);

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Home = () => {
  // Responsive font sizes based on screen size
  const titleSize = useBreakpointValue({ base: "2xl", md: "4xl" });

  return (
    <Box
      position="relative"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      zIndex={1}
      as={motion.div}
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <MotionHeading
        as="h1"
        fontSize={{ base: "60px", md: "100px" }}
        color="#D3D3D3"
        variants={fadeInUp}
        transition={{ duration: 0.6, ease: "easeOut", delay:0 }}
      >
        Welcome!
      </MotionHeading>
      <MotionHeading
        as="h1"
        size={titleSize}
        color="#D3D3D3"
        variants={fadeInUp}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        marginBottom="10px"
      >
        I&rsquo;m Roy Matar
      </MotionHeading>
      <MotionHeading
        as="h1"
        fontSize={{ base: '30px', md: '60px' }}
        color="#D3D3D3"
        variants={fadeInUp}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
      >
        Web Developer
      </MotionHeading>
      <Box mt={6} display="flex" gap={4}>
        <Link href="/about" passHref>
          <MotionButton
            borderRadius="60px"
            bg="black"
            color="white"
            border="1px solid"
            initial={{ opacity: 0 }}
            animate={{  opacity: 1 }}
            whileHover={{backgroundColor: 'black' }}
            transition={{ duration: 0.6, ease: "easeOut", delay:0.9 }}
          >
            About
          </MotionButton>
        </Link>
        <Link href='/contact' passHref>
          <MotionButton
            borderRadius="60px"
            sx={{
              background: 'linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)',
              color: 'white',
              _hover: {
                background: 'linear-gradient(135deg, #0072FF 0%, #00C6FF 100%)',
              },
            }}
            initial={{  opacity: 0 }}
            animate={{  opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay:1.2 }}
          >
            Contact Me
          </MotionButton>
        </Link>
      </Box>
    </Box>
  );
};

export default Home;
