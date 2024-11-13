import React from "react";
import Navbar from "./Components/Navbar";
import Heropage from "./Components/Heropage";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import Footer from "./Footer";
import Service from "./Service";

const App = () => {
  return (
    <>
      <Navbar />
      <Heropage />
      <About />
      <Service />
      <Contact />
      <Projects />
      <Footer />
    </>
  );
};

export default App;
