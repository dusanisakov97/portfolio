import About from "./components/About";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Work from "./components/Work";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <ScrollToTop />
    </div>
  );
}

export default App;
