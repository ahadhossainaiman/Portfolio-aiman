import React from "react";
import aiman from "../img/aiman2.png";

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={aiman} alt="" />
      </div>
      <div className="about-info">
        <h4>
          I am<span> Ahad Hossain Aiman</span>
        </h4>
        <p className="about-text">
          I am Aiman. I am a web developer(MERN). I can learn anything at any time.
          For that, I take the help of Google and YouTube. My core skill is
          based on JavaScript and love to do most of the things using
          JavaScript. As a Web developer, I have expertise in ReactJS,
          JavaScript, ES-6, node.js, vanila.js, HTML, CSS, and many more. I'm
          highly passionate about JavaScript-based software development
          technologies such as: - MERN Stack (MongoDB, Express.js, React,
          Node.js)
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Address</p>
            <p>Countries</p>
          </div>
          <div className="right-section">
            <p>: Ahad Hossain Aiman</p>
            <p>: 22</p>
            <p>: Bangladeshi</p>
            <p>: English, Bangla</p>
            <p>: 84 No,South Goran Khilgaon Dhaka 1219</p>
            <p>: Bangladesh</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageSection;
