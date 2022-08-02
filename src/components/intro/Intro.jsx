import "./intro.scss"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { init } from 'ityped'
import { useEffect, useRef } from "react";


export default function Intro() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true, 
      backDelay: 1500,
      backSpeed: 100,
      strings: ["Developer", "Designer", "Content Creator" ] 
    });
    console.log(textRef)
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Nguyen Thanh Nam</h1>
          <h3>Freelance <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <KeyboardArrowDownIcon className="arrowDown"/>
        </a>
      </div>
    </div>
  )
}
