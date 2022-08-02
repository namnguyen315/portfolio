import "./works.scss"
import SecurityUpdateGoodRoundedIcon from '@mui/icons-material/SecurityUpdateGoodRounded';
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { useState } from "react";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleClick = (selector) => {
    selector === "left" ?
      setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      // setCurrentSlide(currentSlide < "0" ? 2 : currentSlide - 1)//// 0 tại currentSlide nhỏ hơn 0 nên currentSlide -1
      : setCurrentSlide(currentSlide < 2 ? currentSlide + 1 : 0);
  }


  const data = [
    {
      id: "1",
      icon: <SecurityUpdateGoodRoundedIcon className="icon" />,
      title: "Web Design",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: <PublicRoundedIcon className="icon" />,
      title: "Mobile Application",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: <DescriptionRoundedIcon className="icon" />,
      title: "Branding",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];
  console.log(currentSlide);
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{
          transform: `translateX(-${currentSlide * 100}vw)`
        }}
      >
        {
          data.map((d) => (
            <div className="container">
              <div className="item">
                <div className="left">
                  <div className="leftContainer">
                    <div className="phoneContainer">
                      {d.icon}
                    </div>
                    <h2>{d.title}</h2>
                    <p>
                      {d.desc}
                    </p>
                    <span>Project</span>
                  </div>
                </div>
                <div className="right">
                  <img src={d.img} alt="" />
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <div className="bgrArrowContainer left">
        <div className="bgrNone"></div>
        <div className="bgrArrow">
          <ArrowBackIosRoundedIcon className="arrow left" onClick={() => handleClick("left")} />
        </div>
      </div>
      <div className="bgrArrowContainer right">
        <div className="bgrArrow">
          <ArrowForwardIosRoundedIcon className="arrow right" onClick={() => handleClick("right")} />
        </div>
        <div className="bgrNone"></div>
      </div>
    </div >
  )
}
