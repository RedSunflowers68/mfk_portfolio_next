"use client";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Header from "@/components/Header/Header";
import NavBar from "@/components/NavBar/NavBar";
import Work from "@/components/Work/Work";

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Work />
      <Contact />
    </>
  );
}
