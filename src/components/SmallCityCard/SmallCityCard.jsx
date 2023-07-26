import "./SmallCityCard.css";

const SmallCityCard = (props) => {
  return (
    <article className="small-city-card">
      <h2>{props.name}</h2>
      <h3>{props.temp}</h3>
    </article>
  );
};

export default SmallCityCard;
