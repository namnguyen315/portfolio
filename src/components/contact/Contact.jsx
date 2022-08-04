import React, { useContext, useRef, useState } from "react";
import "./contact.scss";
import { FcCheckmark } from "react-icons/fc";
import { AiFillPhone } from "react-icons/ai";
import { IoLocation } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

export default function Contact() {
  const [done, setDone] = useState(false);
  const form = useRef();
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_0eby0w8",
        "template_na2p3ym",
        form.current,
        "-EwJ6MDKBD3I20qQq"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <div className="backgroundImg"></div>
      <div className="containerBgrContact"></div>
      <div className="containerContact">
        <div className="left">
          <h1 style={{ color: darkMode && "black" }}>CONTACT</h1>
          <div
            className="line"
            style={{ backgroundColor: darkMode && "black" }}
          ></div>
          <form ref={form} onSubmit={sendEmail}>
            <input
              style={{
                backgroundColor: darkMode && "black",
                color: darkMode && "white",
              }}
              type="text"
              name="user_name"
              placeholder="Name"
            />
            <input
              style={{
                backgroundColor: darkMode && "black",
                color: darkMode && "white",
              }}
              type="text"
              name="user_subject"
              placeholder="Subject"
            />
            <input
              style={{
                backgroundColor: darkMode && "black",
                color: darkMode && "white",
              }}
              type="email"
              name="user_email"
              placeholder="Email"
            />
            <textarea
              style={{
                backgroundColor: darkMode && "black",
                color: darkMode && "white",
              }}
              name="message"
              placeholder="Message"
            />
            <button type="submit">
              Send {done && <FcCheckmark className="check" />}
            </button>
          </form>
        </div>
        <div className="right">
          <div
            className="line top"
            style={{ backgroundColor: darkMode && "black" }}
          ></div>
          <div className="containerInfor">
            <div className="phone">
              <AiFillPhone
                style={{ color: darkMode && "black" }}
                className="icon"
              />
              <a href="tel:0847807599" style={{ color: darkMode && "black" }}>
                0847807599
              </a>
            </div>
            <div className="email">
              <IoMdMail
                style={{ color: darkMode && "black" }}
                className="icon"
              />
              <a
                href="mailto:namnguyen3152001xtnd@gmail.com"
                style={{ color: darkMode && "black" }}
              >
                namnguyen3152001xtnd@gmail.com
              </a>
            </div>
            <div className="address">
              <IoLocation
                style={{ color: darkMode && "black" }}
                className="icon"
              />
              <span style={{ color: darkMode && "black" }}>
                Xóm 13, Xuân Phú, Xuân Trường, Nam Định
              </span>
            </div>
          </div>
          <div
            className="line bottom"
            style={{ backgroundColor: darkMode && "black" }}
          ></div>
          <div className="containerBotContact">
            <BsFacebook
              className="icon"
              style={{ color: darkMode && "black" }}
            />
            <BsInstagram
              className="icon"
              style={{ color: darkMode && "black" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
