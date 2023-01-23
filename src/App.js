import "./App.css";
import About from "./components/About/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Scrollup from "./components/Scrollup/Scrollup";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Contact />
        
      </main>

      <Footer />
      <Scrollup />
    </>
  );
}

export default App;
