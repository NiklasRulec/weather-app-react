import { useEffect, useState } from "react";
import CityCard from "../components/CityCard/CityCard";
import "./HomePage.css";
import Header from "../components/Header/Header";

const HomePage = () => {
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [userLocation, setUserLocation] = useState("");

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
        },
        (error) => {
          console.error("Fehler bei der Geolocation: " + error.message);
        }
      );
    } else {
      console.log("Geolocation wird nicht unterstützt");
    }
  }, []);

  useEffect(() => {
    const key = "42eddcbffea9c0c9660d5c4b95553b15";
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserLocation(data);
      });
  }, [lon]);

  return (
    <>
      <Header />
      <section className="home-section">
        {userLocation.name ? (
          <article className="city-cards-gallery">
            <CityCard
              name={userLocation.name}
              temp={`${Math.round(userLocation.main.temp - 273.15)}C°`}
              img={`https://openweathermap.org/img/wn/${userLocation.weather[0].icon}@2x.png`}
              description={userLocation.weather[0].description}
              wind={userLocation.wind.speed}
            />
          </article>
        ) : (
          <h1>Lädt</h1>
        )}
      </section>
    </>
  );
};

export default HomePage;
