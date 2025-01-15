"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import About from "./Compenents/About";
import Contact from "./Compenents/Contact";
import Hero from "./Compenents/Hero";
import Project from "./Compenents/Project"
import Skills from "./Compenents/Skills";

export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh();
  }, []);
  return (
    <main>

      <Hero />
      <About />
      <Contact />
      <Skills />
      <Project />
    </main>
  );
}
