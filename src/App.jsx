import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Achievements from "./components/Achievements";
import FloatingButtons from "./components/FloatingButtons";
import Certificates from "./components/Certificates";
import Image from "./components/Image";
import ReelsGrid from "./components/ReelsGrid";

function App() {
  return (
    <>
      <Navbar />
      <FloatingButtons />
      <main>
        <Hero />
        <Services />
        <Image />
        <Gallery />
        <ReelsGrid />
        <Certificates />
        <Achievements />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
