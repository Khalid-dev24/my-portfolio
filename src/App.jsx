import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certificates from "./components/Certificates";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <div className="spacer"></div>
      <Stack />
      <Certificates />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;