import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

// Define motion component for Box
const MotionBox = motion(Box);

const PortfolioPage = () => {
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
          Contact{" "}
        </Heading>
      </MotionBox>

      <MotionBox
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
      >
        <Text fontSize="lg" lineHeight="tall">
         Coming Soon!
        </Text>
      </MotionBox>
      {/* <MotionBox
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
      >
        <Text fontSize="lg" lineHeight="tall">
          Download my CV
        </Text>
      </MotionBox> */}
    </Box>
  );
};

export default PortfolioPage;
