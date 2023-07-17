import "./Header.css";
import { ThemeContext } from "../../context/Context.jsx";
import { useContext } from "react";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const themeToggle = () => {
    setTheme((prev) => !prev);
  };
  return (
    <header className="header">
      <div onClick={themeToggle}>Mode</div>
    </header>
  );
};

export default Header;
