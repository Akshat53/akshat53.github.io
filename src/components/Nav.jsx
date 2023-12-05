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
    <Row align={"middle"} justify={"space-between"}  >
      <Col push={4}>
        <p className={Styles.logo}>{label}</p>
      </Col>
      <Col lg={12} md={6} sm={3} pull={1}>
        <Menu
          className={Styles.nav}
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={options}
        />
      </Col>
    </Row>
  );
};

export default Nav;
