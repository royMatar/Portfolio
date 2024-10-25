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
      mx="auto"
      p={6}
      pt={{ base: "70px", md: "90px" }}
      color="gray.100"
      borderRadius="md"
      boxShadow="lg"
    >
      <MotionBox
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        textAlign="center"
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
          Hi, I&rsquo;m Roy Matar. My career began in mechanical engineering,
          where I focused on MEP design, project management, and 2D/3D design,
          as well as CNC operation for custom product creation. Later, I
          expanded my skills as a NOC engineer in Lebanon&rsquo;s telecommunications
          sector, responsible for infrastructure power installations and
          maintenance, tackling complex engineering challenges.
          <br />
          <br />
        </Text>
      </MotionBox>

      <MotionBox
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
      >
        {" "}
        <Text fontSize="lg" lineHeight="tall" textAlign="justify">
          During this time, I discovered a new passion for coding and digital
          solutions. This curiosity sparked my transition into web development,
          combining my engineering mindset with creative problem-solving in the
          digital realm.
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
          To pursue this new path, I completed certifications in front-end and
          back-end development, focusing on
          <Text
            as="span"
            bgGradient="linear(to-r, #00C6FF, #0072FF)"
            bgClip="text"
            fontWeight="bold"
          >
            {" "}
            React
          </Text>{" "}
          for creating responsive, interactive applications and <Text
            as="span"
            bgGradient="linear(to-r, #00FF88, #00B76B)"            bgClip="text"
            fontWeight="bold"
          >
            {" "}
            Django
          </Text>{" "} for
          robust API development. I&rsquo;ve since worked with various teams,
          developing solutions that are both visually engaging and functionally
          powerful.
          <br />
          <br />
        </Text>
      </MotionBox>

      <MotionBox
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
      >
        <Text fontSize="lg" lineHeight="tall" textAlign="justify">
          My journey has taught me to blend the precision of engineering with
          the adaptability of software development. I&rsquo;m excited to continue
          building and sharing my work.
        </Text>
      </MotionBox>

      <Box
        textAlign="center"
        mt={6}
        display="flex"
        gap={4}
        justifyContent="center"
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
            transition={{ duration: 0.6, ease: "easeOut", delay: 1.5 }}
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
            transition={{ duration: 0.6, ease: "easeOut", delay: 1.8 }}
          >
            Portfolio{" "}
          </MotionButton>
        </Link>
      </Box>
    </Box>
  );
};

export default AboutPage;
