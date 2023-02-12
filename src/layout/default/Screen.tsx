import { api } from "@/utils/apiService";
import { useEffect } from "react";
import Footer from "../footer";
import Header from "../header";
import Hero from "../hero";
import Navbar from "../navbar";
import { LayoutProvider } from "./Screen.machine";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LayoutProvider>
        <Header />
        <Navbar />
        <Hero />
        <main>{children}</main>
        <Footer />
      </LayoutProvider>
    </>
  );
}