import "./topbar.scss";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import { useContext } from "react";
import { ThemeContext } from "../../context";

export default function Topbar({ menuOpen, setMenuOpen }) {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className={"topbar " + (menuOpen && "active")}
      style={{
        backgroundColor: darkMode && "black",
        color: darkMode && "white",
      }}
    >
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            genius.
          </a>
          <div className="itemContainer">
            <PersonIcon className="icon" />
            <span>0847807599</span>
          </div>
          <div className="itemContainer">
            <EmailIcon className="icon" />
            <span>namnguyen3152001xtnd@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span
              className="line1"
              style={{ backgroundColor: darkMode && "white" }}
            ></span>
            <span
              className="line2"
              style={{ backgroundColor: darkMode && "white" }}
            ></span>
            <span
              className="line3"
              style={{ backgroundColor: darkMode && "white" }}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
}
