import { useState } from "react";
import Nav from "./componets/Nav";
import Home from "./componets/Home";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={`app ${theme}`}>
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <Home />
    </div>
  );
}

export default App;
