import { Button } from "react-bootstrap";
import NavBar from "./components/navBar";
import HeroSection from "./components/heroSection";
import About from "./components/AboutMe";
import Skills from "./components/Skills";
import Project from "./components/projects";
function App() {
  return <div className="App">
    <NavBar/>
    <HeroSection/>
    <About/>
    <Skills/>
    <Project/>

    
  </div>;
}

export default App;
