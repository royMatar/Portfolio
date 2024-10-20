"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { motion } from "framer-motion";

// Yup validation schema
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string().required("Message is required"),
});

const ContactForm = () => {
  const [alertStatus, setAlertStatus] = useState(null);

  const handleSubmit = async (values, actions) => {
    try {
      // Send form data to Formspree endpoint
      const response = await axios.post(
        "https://formspree.io/f/mknaapwp",
        values
      );
      if (response.status === 200) {
        setAlertStatus({
          type: "success",
          message: "Message sent successfully!",
        });
        actions.resetForm();
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setAlertStatus({
        type: "error",
        message: "Failed to send the message. Please try again.",
      });
    } finally {
      actions.setSubmitting(false);
    }
  };
  // Automatically close the alert after 5 seconds
  useEffect(() => {
    if (alertStatus) {
      const timer = setTimeout(() => {
        setAlertStatus(null);
      }, 5000);
      return () => clearTimeout(timer); // Cleanup the timer on unmount
    }
  }, [alertStatus]);
  return (
    <>
      {/* Alert Message */}
      {alertStatus && (
        <Alert
          status={alertStatus.type}
          mb={4}
          borderRadius="md"
          bgGradient="linear(135deg, #00C6FF 0%, #0072FF 100%)"
          position="fixed" // Makes it stick to the screen
          top="20px" // Positioned near the top
          right="20px" // Positioned to the right
          width="300px" // Optional: Set width for the alert box
          zIndex={2500}
        >
          <AlertIcon color="black" />
          <Box flex="1">
            <AlertTitle>
              {alertStatus.type === "success" ? "Success!" : "Error!"}
            </AlertTitle>
            <AlertDescription>{alertStatus.message}</AlertDescription>
          </Box>
          <CloseButton
            position="absolute"
            right="8px"
            top="8px"
            onClick={() => setAlertStatus(null)}
          />
        </Alert>
      )}

      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Box
            as={motion.div}
            p={6}
            borderRadius="md"
            boxShadow="md"
            width="100%"
            maxW="500px"
            mx="auto"
            backgroundColor="black"
          >
            <Form>
              <VStack spacing={4}>
                {/* Name Field */}
                <Field name="name">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.name && form.touched.name}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                      >
                        <FormLabel htmlFor="name">Name:</FormLabel>

                        <Input
                          {...field}
                          id="name"
                          placeholder="Your Name"
                          focusBorderColor="blue.500"
                        />
                      </motion.div>
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                {/* Email Field */}
                <Field name="email">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.email && form.touched.email}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                      >
                        <FormLabel htmlFor="email">Email:</FormLabel>

                        <Input
                          {...field}
                          id="email"
                          type="email"
                          placeholder="Your Email"
                          focusBorderColor="blue.500"
                        />
                      </motion.div>
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                {/* Message Field */}
                <Field name="message">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.message && form.touched.message}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                      >
                        <FormLabel htmlFor="message">Message:</FormLabel>

                        <Textarea
                          {...field}
                          id="message"
                          placeholder="Your Message"
                          focusBorderColor="blue.500"
                          rows={6}
                        />
                      </motion.div>
                      <FormErrorMessage>{form.errors.message}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                {/* Submit Button */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.5 }}
                >
                  <Button
                    type="submit"
                    borderRadius="60px"
                    sx={{
                      background: 'linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)',
                      color: 'white',
                      _hover: {
                        background: 'linear-gradient(135deg, #0072FF 0%, #00C6FF 100%)',
                      },
                    }}                    isLoading={isSubmitting}
                    width="100%"
                  >
                    Send Message
                  </Button>
                </motion.div>
              </VStack>
            </Form>
          </Box>
        )}
      </Formik>
    </>
  );
};

export default ContactForm;
