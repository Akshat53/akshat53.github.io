import React from "react";
import Nav from "../components/Nav";
import { Col, Row } from "antd";
import { navOptions ,buttonOptions} from "../constrants";
import Profile from "../components/profile/Profile";
import Img from "../images/akshat.png";


const Home = () => {
  return (
    <>
      <Nav options={navOptions} label={"AS"} />
      <Profile
        src={Img}
        designation={"Frontend Developer"}
        name={"Akshat Singh"}
        options ={buttonOptions}
       
      />
    </>
  );
};

export default Home;
