import { Providers } from "./providers";
import { fonts } from "./fonts";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeartbeatSignal from "./components/icons/Signal";
import { Box } from "@chakra-ui/react";

export const metadata = {
  title: "Roy Matar Portfolio",
  description: "Roy Matar's portfolio showcasing my projects and skills in web development, mechanical engineering, and more.",
  keywords: "Roy Matar, portfolio, web development, mechanical engineering, React, Django, projects",
  authors: [{ name: "Roy Matar", url: "https://roymatar.com" }], // Add your website URL
  creator: "Roy Matar",
  openGraph: {
    title: "Roy Matar Portfolio",
    description: "Roy Matar's portfolio showcasing my projects and skills in web development, mechanical engineering, and more.",
    url: "https://roymatar.com", // Add your website URL
    siteName: "Roy Matar",
    images: [
      {
        url: "/path/to/image.jpg", // Add an image for the Open Graph
        width: 800,
        height: 600,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roy Matar's Portfolio",
    description: "Roy Matar's portfolio showcasing my projects and skills in web development, mechanical engineering, and more.",
    images: "/path/to/image.jpg", // Add an image for Twitter
  },
  metadataBase: new URL("https://roymatar.com"), // Set your website's base URL here
};

// Move viewport to a separate export
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={fonts.rubik.variable} style={{ backgroundColor: "black" }}>
      <body style={{ margin: 0, backgroundColor: "black" }}>
        <Providers>
          <Box
            display="flex"
            minHeight="80vh"
            bg="black"
            color="#D3D3D3"
            position="relative"
          >
            {/* Heartbeat Signal */}
            <Box
              position="absolute"
              top={{ base: "10px", md: "auto" }} // Top for small screens, auto for large screens
              left={{ base: "10px", md: "52%" }} // Center horizontally for large screens
              bottom={{ base: "auto", md: "20px" }} // Move to bottom for large screens
              transform={{ base: "none", md: "translateX(-50%)" }} // Center horizontally for large screens
              padding="10px"
              zIndex="1000"
              backgroundColor='black'
              borderRadius='50px'
            >
              <HeartbeatSignal />
            </Box>

            <Navbar />
            <Box as="main" flexGrow={1}>
              {children}
            </Box>
            <Footer />
          </Box>
        </Providers>
      </body>
    </html>
  );
}
