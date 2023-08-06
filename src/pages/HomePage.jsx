import { ThemeContext, CityListContext } from "../Context/Context";
import { useContext } from "react";
import "./HomePage.css";
import Header from "../components/Header/Header";
import CityScrollList from "../components/CityScrollList/CityScrollList";
import CitySearch from "../components/CitySearch/CitySearch";

const HomePage = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { cityList } = useContext(CityListContext);

  return (
    <>
      <Header />
      <CitySearch />
      <section className="home-section">
        {cityList ? (
          <>
            <CityScrollList />
          </>
        ) : (
          <>
            <span className={theme ? "loader-light" : "loader-dark"}></span>
          </>
        )}
      </section>
    </>
  );
};

export default HomePage;
