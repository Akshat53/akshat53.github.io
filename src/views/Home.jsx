import React from "react";
import Nav from "../components/Nav";

import { navOptions, buttonOptions } from "../constrants";
import Profile from "../components/profile/Profile";
import Img from "../images/akshat.png";
import About from "../components/aboutUs/About";
import styles from "../components/component.module.css";
import Img2 from "../images/akshat2.jpg";

const Home = () => {
  return (
    <>
      <Nav options={navOptions} label={"AS"} />
      <Profile
        src={Img}
        designation={"Frontend Developer"}
        name={"Akshat Singh"}
        options={buttonOptions}
      />
      <About heading={"About Us"} src={Img2} />
    </>
  );
};

export default Home;
