import type { Metadata } from "next";
import { Providers } from "./providers";
import { fonts } from "./fonts";
import Navbar from "../app/components/Navbar";
import Footer from '../app/components/Footer';
import HeartbeatSignal from '../app/components/icons/Signal';
import { Box } from '@chakra-ui/react';

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Roy Matar's Portfolio - Web Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fonts.rubik.variable}>
      <body>
        <Providers>
          <Box
            display="flex"
            minHeight="100vh"
            bg="black"
            color="#D3D3D3"
            position="relative"
          >
            {/* Heartbeat Signal */}
            <Box
              position="absolute"
              top={{ base: '10px', md: 'auto' }}  // Top for small screens, auto for large screens
              left={{ base: '10px', md: '52%' }}  // Center horizontally for large screens
              bottom={{ base: 'auto', md: '20px' }}  // Move to bottom for large screens
              transform={{ base: 'none', md: 'translateX(-50%)' }}  // Center horizontally for large screens
              padding="10px"
              zIndex="1000"
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
