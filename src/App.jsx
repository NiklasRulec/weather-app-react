import "./App.css";
import HomePage from "./pages/HomePage";
import {
  ThemeContext,
  CityListContext,
  UserLat,
  UserLon,
} from "./Context/Context";
import { useContext, useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState(false);
  const [cityList, setCityList] = useState([]);
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
          localStorage.setItem("Lat", lat);
          localStorage.setItem("Lon", lon);
        },
        (error) => {
          console.error("Fehler bei der Geolocation: " + error.message);
        }
      );
    } else {
      console.log("Geolocation wird nicht unterstützt");
    }
  }, []);

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <CityListContext.Provider value={{ cityList, setCityList }}>
          <UserLat.Provider value={{ lat, setLat }}>
            <UserLon.Provider value={{ lon, setLon }}>
              <div className={theme ? "dark" : "light"}>
                <HomePage />
              </div>
            </UserLon.Provider>
          </UserLat.Provider>
        </CityListContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
