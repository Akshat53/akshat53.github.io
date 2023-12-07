import React from "react";
import Nav from "../components/Nav";

import {
  navOptions,
  buttonOptions,
  cardOptions,
  expCard1,
  expCard2,
} from "../constrants";
import Profile from "../components/profile/Profile";
import Img from "../images/akshat.png";
import About from "../components/aboutUs/About";

import Img2 from "../images/akshat2.jpg";
import Experience from "../components/experience/Experience";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#28282B", color: "white " }}>
      <Nav options={navOptions} label={"AS"} />
      <Profile
        src={Img}
        designation={"Frontend Developer"}
        name={"Akshat Kr. Singh"}
        options={buttonOptions}
      />
      <About
        heading={"About Me"}
        subHeading={"Get To Know More"}
        src={Img2}
        options={cardOptions}
        text={
          "Experienced in frontend development for two years with HTML, CSS, JavaScript, React.js, and Next.js, proficient in GitHub, Postman, and Bitbucket for streamlined workflows. Also, possess one year of Java microservice development experience. Holds a BCA degree, blending practical expertise with a strong educational foundation."
        }
      />
      <Experience
        heading={"Experience"}
        subHeading={"Explore My"}
        options1={expCard1}
        options2={expCard2}
      />
    </div>
  );
};

export default Home;
