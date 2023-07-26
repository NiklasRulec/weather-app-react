import "./SmallCityCard.css";

const SmallCityCard = (props) => {
  return (
    <article className="small-city-card">
      <h3>{props.name}</h3>
      <h3>{props.temp}</h3>
    </article>
  );
};

export default SmallCityCard;
