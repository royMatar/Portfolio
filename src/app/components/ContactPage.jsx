import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

// Define motion component for Box
const MotionBox = motion(Box);

const PortfolioPage = () => {
  return (
    <Box
      maxW="800px"
      mt={6}
      mx="auto"
      p={6}
      pt={{ base: "70px", md: "100px" }}
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

     <ContactForm/>
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
