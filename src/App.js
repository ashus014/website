import "./App.css";
import { NavBar } from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Poftfolio from "./components/Poftfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      {console.log("Hello to you as well...")}
      <NavBar />
      <Home />
      <About />
      <Poftfolio />
      <Experience />
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
