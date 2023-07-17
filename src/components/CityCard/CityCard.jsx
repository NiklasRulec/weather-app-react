import WindIcon from "../../assets/WindIcon/WindIcon";
import "./CityCard.css";

const CityCard = (props) => {
  return (
    <article className="city-card">
      <h2>{props.name}</h2>
      <img src={props.img} alt="weather-icon" />
      <h1>{props.temp}</h1>
      <h2>{props.description}</h2>
      <div className="wind-container">
        <h3>Wind</h3>
        <div>
          <WindIcon />
          <h3>{props.wind} km/h</h3>
        </div>
      </div>
    </article>
  );
};

export default CityCard;
