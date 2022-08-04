import "./testimonials.scss";
import ShortcutIcon from "@mui/icons-material/Shortcut";
import { FiTwitter, FiYoutube, FiInstagram } from "react-icons/fi";
import { useContext } from "react";
import { ThemeContext } from "../../context";

export default function Testimonials() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const data = [
    {
      id: 1,
      img: "https://haycafe.vn/wp-content/uploads/2022/03/Anh-chan-dung-nam.jpg",
      social: <FiTwitter className="iconSocial" />,
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, consequatur aut itaque harum ea reiciendis .",
      name: "Tom Durden",
      job: "Senior Developer",
    },
    {
      id: 2,
      img: "https://phunugioi.com/wp-content/uploads/2022/02/Anh-chan-dung.jpg",
      social: <FiYoutube className="iconSocial" />,
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, consequatur aut itaque harum ea reiciendis voluptates blanditiis quibusdam, recusandae qui .?",
      name: "Alex Kalinski",
      job: "Co-Founder of DELKA",
      feature: true,
    },
    {
      id: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKh-L6NubudwEma608y8v6nDx6ct4psSCqYA&usqp=CAU",
      social: <FiInstagram className="iconSocial" />,
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, consequatur aut itaque harum ea reiciendis voluptates .",
      name: "Martin Harold",
      job: "CEO of ALBI",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div
            style={{
              color: darkMode && "black",
            }}
            className={d.feature ? "card feature" : "card"}
          >
            <div className="top">
              <ShortcutIcon className="icon" />
              <img src={d.img} alt="" />
              {d.social}
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.job}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
