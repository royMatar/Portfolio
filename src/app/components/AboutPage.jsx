import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";

// Define motion component for Box
const MotionBox = motion(Box);
const MotionButton = motion(Button);

const AboutPage = () => {
  return (
    <Box
      maxW="800px"
      mt={6}
      mx="auto"
      p={6}
      pt={{ base: "70px", md: "90px" }}
      color="gray.100"
      borderRadius="md"
      boxShadow="lg"
      pb={{ base: "100px", md: "10px" }}
    >
      <MotionBox
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        textAlign="start"
        pb={3}
      >
        <Heading as="h1" size="2xl" mb={4} display="inline">
          About{" "}
          <MotionBox
            as="span"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 2.1 }}
            display="inline-block"
          >
            <Text
              as="span"
              bgGradient="linear(to-r, #00C6FF, #0072FF)"
              bgClip="text"
              fontWeight="bold"
            >
              Me
            </Text>
          </MotionBox>
        </Heading>
      </MotionBox>

      <MotionBox
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <Text fontSize="lg" lineHeight="tall" textAlign="justify">
          Hi, I&rsquo;m Roy Matar. I started as a mechanical engineer,
          specializing in MEP design, project management, 2D/3D design, and CNC
          operation.
          <br />
          <br />
        </Text>
      </MotionBox>

      <MotionBox
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
      >
        <Text fontSize="lg" lineHeight="tall" textAlign="justify">
          My passion for coding led me to transition into web development,
          combining engineering precision with creative problem-solving. I
          earned certifications in front-end and back-end development, mastering
          <Text
            as="span"
            bgGradient="linear(to-r, #00C6FF, #0072FF)"
            bgClip="text"
            fontWeight="bold"
          >
            {" "}
            React
          </Text>{" "}
          for interactive applications and{" "}
          <Text
            as="span"
            bgGradient="linear(to-r, #00FF88, #00B76B)"
            bgClip="text"
            fontWeight="bold"
          >
            {" "}
            Django
          </Text>{" "}
          for robust APIs.
          <br />
          <br />
        </Text>
      </MotionBox>

      <MotionBox
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
      >
        <Text fontSize="lg" lineHeight="tall" textAlign="justify">
        Now, I create solutions that are visually engaging and functionally powerful, blending my engineering background with software development.
        </Text>
      </MotionBox>

      <Box
        textAlign="start"
        mt={6}
        display="flex"
        gap={4}
        justifyContent="start"
      >
        <Link href="/about" passHref>
          <MotionButton
            borderRadius="60px"
            bg="black"
            color="white"
            border="1px solid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ backgroundColor: "black" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 1.2 }}
          >
            Download CV{" "}
          </MotionButton>
        </Link>
        <Link href="/portfolio" passHref>
          <MotionButton
            borderRadius="60px"
            sx={{
              background: "linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)",
              color: "white",
              _hover: {
                background: "linear-gradient(135deg, #0072FF 0%, #00C6FF 100%)",
              },
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 1.5 }}
          >
            Portfolio{" "}
          </MotionButton>
        </Link>
      </Box>
    </Box>
  );
};

export default AboutPage;
