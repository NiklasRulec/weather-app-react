import "./App.css";
import HomePage from "./pages/HomePage";
import { ThemeContext } from "./context/Context";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState(false);
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={theme ? "dark" : "light"}>
          <HomePage />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
