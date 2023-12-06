import React from "react";
import Nav from "../components/Nav";
import { Col, Row } from "antd";
import { navOptions } from "../constrants";
import Profile from "../components/profile/Profile";
import Img from "../images/akshat.png";
import { DownloadOutlined } from '@ant-design/icons';

const Home = () => {
  return (
    <>
      <Nav options={navOptions} label={"AS"} />
      <Profile
        src={Img}
        designation={"Frontend Developer"}
        name={"Akshat Singh"}
        text={"Downloade CV"}
        icon={<DownloadOutlined />}
      />
    </>
  );
};

export default Home;
