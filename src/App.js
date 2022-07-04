import { Button } from "react-bootstrap";
import NavBar from "./components/navBar";
import HeroSection from "./components/heroSection";
import About from "./components/AboutMe";
import Skills from "./components/Skills";
import Project from "./components/projects";
import Footer from "./components/footer";
function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <br />
      <br />
      <br />
      <hr />
      <br />

      <About />
      <br />
      <br />
      <br />
      <br />
      <br />
      <hr />
      <br />

      <Skills />
      <br />
      <br />
      <hr />
      <br />

      <Project />
      <br />
      <br />
      <hr />
      
      <Footer />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

    </div>
  );
}

export default App;
