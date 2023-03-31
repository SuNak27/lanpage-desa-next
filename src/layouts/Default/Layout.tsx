import { Box, Container } from "@chakra-ui/react";
import { Hero } from "../Hero";
import { Navbar } from "../Navbar/Navbar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Container maxW="full" p={0}>
        <Navbar />
        <Hero />
        {children}
      </Container>
    </>
  );
}

export default Layout;