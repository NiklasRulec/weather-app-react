import { useContext, useEffect, useState } from "react";
import { CityListContext, UserLat, UserLon } from "../../Context/Context";
import "./CityScrollList.css";
import CityCard from "../CityCard/CityCard";

const CityScrollList = () => {
  const { lat, setLat } = useContext(UserLat);
  const { lon, setLon } = useContext(UserLon);
  const [userLocation, setUserLocation] = useState("");
  const { cityList } = useContext(CityListContext);

  useEffect(() => {
    console.log(cityList);
  }, [cityList]);

  useEffect(() => {
    const apiKey = import.meta.env.API;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserLocation(data);
      });
  }, [lon]);

  return (
    <div className="city-scroll-list-container">
      <div className="city-scroll-list">
        {userLocation ? (
          <>
            <CityCard
              name={userLocation.name}
              temp={`${Math.round(userLocation?.main.temp - 273.15)}°`}
              img={`https://openweathermap.org/img/wn/${userLocation.weather[0].icon}@2x.png`}
              description={userLocation.weather[0].description}
              wind={userLocation.wind.speed}
            />
            {cityList.map((city, index) => (
              <CityCard
                key={index}
                name={city.name}
                temp={`${Math.round(city.main.temp - 273.15)}°`}
                img={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
                description={city.weather[0].description}
                wind={city.wind.speed}
              />
            ))}
          </>
        ) : (
          <h2>Lädt</h2>
        )}
      </div>
    </div>
  );
};

export default CityScrollList;
