import { createContext, useState } from "react";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

import "./App.css";
import About from "./components/About/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Scrollup from "./components/Scrollup/Scrollup";
import Skills from "./components/Skills/Skills";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <TawkMessengerReact
          propertyId="63d99aa3c2f1ac1e2030af88"
          widgetId="1go5084m0"
        />
        <Header theme={theme} toggleTheme={toggleTheme} />

        <main className="main">
          <Home theme={theme} />
          <About theme={theme} />
          <Skills />
          <Contact />
        </main>

        <Footer />
        <Scrollup />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
