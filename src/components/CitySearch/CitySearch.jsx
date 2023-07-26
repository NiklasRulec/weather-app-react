import { useContext, useEffect, useState } from "react";
import "./CitySearch.css";
import { CityListContext } from "../../Context/Context";

const CitySearch = () => {
  const { cityList, setCityList } = useContext(CityListContext);
  const [cityInput, setCityInput] = useState("");
  const key = "42eddcbffea9c0c9660d5c4b95553b15";

  useEffect(() => {
    const storedCityList = JSON.parse(localStorage.getItem("cityList"));
    if (storedCityList) {
      setCityList(storedCityList);
    }
  }, []);

  const addCity = (e) => {
    e.preventDefault();
    if (cityInput.trim() !== "") {
      fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${cityInput}&limit=5&appid=${key}`
      )
        .then((res) => res.json())
        .then((data) => {
          const cityLat = data[0]?.lat;
          const cityLon = data[0]?.lon;
          if (cityLat && cityLon) {
            fetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${cityLat}&lon=${cityLon}&appid=${key}`
            )
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                data.name =
                  cityInput.charAt(0).toUpperCase() + cityInput.slice(1);
                const updatedCityList = [...cityList, data];
                setCityList(updatedCityList);
                setCityInput("");

                localStorage.setItem(
                  "cityList",
                  JSON.stringify(updatedCityList)
                );
              })
              .catch((error) => {
                console.error(
                  "Fehler beim Abrufen der Wetterdaten: " + error.message
                );
              });
          } else {
            console.error("Keine Daten für die eingegebene Stadt gefunden.");
          }
        })
        .catch((error) => {
          console.error(
            "Fehler beim Abrufen der Stadtinformationen: " + error.message
          );
        });
    }
  };

  return (
    <article className="city-search">
      <form onSubmit={addCity}>
        <input
          type="text"
          id="city-name"
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
        />
        <button type="submit">Add City</button>
      </form>
    </article>
  );
};

export default CitySearch;
