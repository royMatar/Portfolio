import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

// Define motion component for Box
const MotionBox = motion(Box);

const AboutPage = () => {
  return (
    <Box
      maxW="800px"
      mx="auto"
      p={6}
      pt={{ base: "70px", md: "300px" }}
      color="gray.100"
      borderRadius="md"
      boxShadow="lg"
    >
    
      <MotionBox
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        textAlign="center" // Center text alignment
        pb={3}
      >
        <Heading as="h1" size="2xl" mb={4} display="inline">
          About{" "}
        </Heading>
      </MotionBox>

      <MotionBox
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
      >
        <Text fontSize="lg" lineHeight="tall">
          Hi, I&rsquo;m Roy Matar, a passionate web developer with a background in
          mechanical engineering. After transitioning into the world of web
          development, I&rsquo;ve become specialized in working with React, Django,
          and Django Rest Framework. I enjoy building full-stack applications,
          from e-commerce platforms to SaaS applications, and have a deep
          interest in 3D modeling and IoT solutions.<br></br>
          <br></br>
        </Text>
      </MotionBox>
      <MotionBox
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
      >
        <Text fontSize="lg" lineHeight="tall">
          Download my CV
        </Text>
      </MotionBox>
    </Box>
  );
};

export default AboutPage;
