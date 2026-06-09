import { useState } from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Projects from "./Projects";
import Background from "./Background";
import Education from "./Education";
import Certifications from "./Certifications";
import Achievements from "./Achievements";
function App() {
  const [theme, setTheme] = useState(false);

  return (

    <div
      className={`relative z-10 min-h-screen transition-colors duration-500 ${
        theme
          ? "bg-white text-black"
          : "bg-black text-white"
      }`}
    >
      <Nav theme={theme} setTheme={setTheme} title=" _Sabya_05" />
      <Background />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Achievements />
      <Certifications />
      <Contact />
    
    </div>
  );
}

export default App;