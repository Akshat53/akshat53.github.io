import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu, Row, Col } from "antd";
import Styles from "../components/component.module.css";

const Nav = (props) => {
  const { options = [], label } = props;
  const [current, setCurrent] = useState("about");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Row align={"middle"} justify={"center"}  >
      <Col lg={6} md={12} sm={12} xs={12} >
        <div>
        <p className={Styles.logo}>{label}</p>
        </div>
      </Col>
      <Col lg={6} md={12} sm={12} xs={12} >
        <div className={Styles.container}>
        <Menu
          className={Styles.nav}
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={options}
        />
        </div>
      </Col>
    </Row>
  );
};

export default Nav;
