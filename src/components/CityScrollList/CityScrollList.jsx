import { useContext, useEffect } from "react";
import { CityListContext } from "../../Context/Context";
import "./CityScrollList.css";
import SmallCityCard from "../SmallCityCard/SmallCityCard";

const CityScrollList = () => {
  const { cityList } = useContext(CityListContext);

  useEffect(() => {
    console.log(cityList);
  }, [cityList]);

  return (
    <div className="city-scroll-list-container">
      <div className="city-scroll-list">
        {cityList.map((city, index) => (
          <SmallCityCard
            key={index}
            name={city.name}
            temp={`${Math.round(city.main.temp - 273.15)}°`}
            img={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
            description={city.weather[0].description}
            wind={city.wind.speed}
          />
        ))}
      </div>
    </div>
  );
};

export default CityScrollList;
