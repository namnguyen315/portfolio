import { useContext } from "react";
import { ThemeContext } from "../../context";
import "./portfolioList.scss";

export default function PortfolioList({ id, title, active, setSelected }) {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      style={{
        backgroundColor: active && darkMode && "white",
        color: active && darkMode && "#15023a",
        fontWeight: active && darkMode && "700",
      }}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
