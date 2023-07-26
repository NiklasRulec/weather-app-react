import "./App.css";
import HomePage from "./pages/HomePage";
import { ThemeContext, CityListContext } from "./Context/Context";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState(false);
  const [cityList, setCityList] = useState([]);

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <CityListContext.Provider value={{ cityList, setCityList }}>
          <div className={theme ? "dark" : "light"}>
            <HomePage />
          </div>
        </CityListContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
