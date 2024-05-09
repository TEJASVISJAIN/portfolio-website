import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import PostmanComponent from "./components/Postman";
import Education from "./components/Education";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <PostmanComponent />
      <Experience />
      {/* <Education /> */}
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
