import "./Header.css";
import { ThemeContext } from "../../Context/Context";
import { useContext } from "react";
import DarkLightIcon from "../../assets/DarkLightIcon/DarkLightIcon";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const themeToggle = () => {
    setTheme((prev) => !prev);
  };
  return (
    <header className="header">
      <div onClick={themeToggle}>
        <DarkLightIcon />
      </div>
    </header>
  );
};

export default Header;
