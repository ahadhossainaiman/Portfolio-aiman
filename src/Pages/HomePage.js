import React from "react";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import ReactTypingEffect from "react-typical";
import "../styles/button.css";

function HomePage() {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hi, I am
          <span
            style={{
              text: "1px -1px 18px #09ff00,-1px -3px 2px #92f4af",
              color: "#4a00e0",
            }}
          >
            {" "}
            Ahad Hossain Aiman.
          </span>
        </h1>
        <p className="text">
          <span style={{ color:"#8e2de2" }}>
            <ReactTypingEffect
              loop={Infinity}
              wrapper="b"
              steps={[
                "Web Developer",
                1000,
                "Front-End Developer",
                1000,
                "Web Designer",
                1000,
                "JavaScript Developer",
                1000,
                "Backend Developer",
                1000,
                "React Developer",
                1000,
                "Node Js Developer",
                1000,
                "Full-Stack Web Developer(MERN)",
                1000,
              ]}
            />
          </span>
        </p>
        <p className="h-sub-text">
          I am Aiman. I am a web developer. I can learn anything at any time.
          For that, I take the help of Google and YouTube. My core skill is
          based on JavaScript and love to do most of the things using
          JavaScript. As a Web developer, I have expertise in ReactJS,
          JavaScript, ES-6, node.js, vanila.js, HTML, CSS, and many more. I'm
          highly passionate about JavaScript-based software development
          technologies such as: - MERN Stack (MongoDB, Express.js, React,
          Node.js)
        </p>
        <div className="btn-div">
        <a href="https://drive.google.com/u/0/uc?id=17Xd9CKVixUC5j9sgGXiCcsTRJld2dtVd&export=download" class="animated-button">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          RESUME
        </a>
        </div>
        <div className="icons">
          <a href="https://www.facebook.com/ahad.aiman" className="icon-holder">
            <FontAwesomeIcon icon={faFacebook} className="icon fb" />
          </a>
          <a href="https://github.com/ahadhossainaiman" className="icon-holder">
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </a>
          <a href="https://www.linkedin.com/in/ahad-hossain-aiman/ "className="icon-holder">
            <FontAwesomeIcon icon={faLinkedin} className="icon yt" />
          </a>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
