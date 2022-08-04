import React, { useContext } from "react";
import "./toggle.scss";
import { BsSun, BsFillMoonFill } from "react-icons/bs";
import { ThemeContext } from "../../context";

const Toggle = () => {
  const theme = useContext(ThemeContext);
  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="toggle">
      <BsSun className="sun" />
      <div
        className="fillter"
        onClick={handleClick}
        style={{
          left: theme.state.darkMode ? 0 : 35,
        }}
      ></div>
      <BsFillMoonFill className="moon" />
    </div>
  );
};

export default Toggle;
