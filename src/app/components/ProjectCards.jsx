import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Grid, IconButton } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

const items = [
  { id: "1", title: "Project title", subtitle: "Description 1" },
  { id: "2", title: "Project title ", subtitle: "Description 2" },
  { id: "3", title: "Project title", subtitle: "Description 3" },
  { id: "4", title: "Project title", subtitle: "Description 4" },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      type: "spring", 
      stiffness: 150, 
      damping: 12 
    } 
  },
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

const ProjectCardStack = () => {
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedId]);

  return (
    <Box p={2}>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={staggerContainer}
      >
        <Grid
          templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
          gap={6}
          alignItems="center"
        >
          {items.map((item) => (
            <Box display="flex" justifyContent="center" key={item.id}>
              <motion.div
                layoutId={item.id}
                onClick={() => setSelectedId(item.id)}
                variants={cardVariants}
                style={{
                  margin: 10,
                  padding: 20,
                  borderWidth: "2px",
                  borderColor: "white",
                  borderRadius: "8px",
                  background: "black",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  cursor: "pointer",
                  width: "300px", 
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <motion.h5>{item.subtitle}</motion.h5>
                <motion.h2>{item.title}</motion.h2>
              </motion.div>
            </Box>
          ))}
        </Grid>
      </motion.div>

      {selectedId && (
        <Box
          position="fixed"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="rgba(0, 0, 0, 0.5)"
          backdropFilter="blur(2px)"
          zIndex="10"
        />
      )}

      <AnimatePresence>
        {selectedId && (
          <Box
            position="fixed"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            zIndex="20"
            p={4}
          >
            <motion.div
              layoutId={selectedId}
              style={{
                position: "relative",
                padding: "40px",
                borderRadius: "8px",
                borderWidth: "2px",
                borderColor: "white",
                background: "black",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 500, damping: 15 }}
            >
              <motion.h5>
                {items.find((item) => item.id === selectedId)?.subtitle}
              </motion.h5>
              <motion.h2>
                {items.find((item) => item.id === selectedId)?.title}
              </motion.h2>

              <IconButton
                aria-label="Close"
                icon={<CloseIcon />}
                position="absolute"
                top="10px"
                right="10px"
                size="sm"
                colorScheme="red"
                onClick={() => setSelectedId(null)}
              />
            </motion.div>
          </Box>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default ProjectCardStack;
