import React, { useState } from "react";
import { Menu, Row, Col, Button, Dropdown } from "antd";
import Styles from "../components/component.module.css";
import { MenuFoldOutlined } from '@ant-design/icons';

const Nav = (props) => {
  const { options = [], label } = props;
  const [current, setCurrent] = useState("about");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const menu = (
    <Menu onClick={onClick}>
      {options.map((option) => (
        <Menu.Item key={option.key}>{option.label}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Row align="middle" justify="center">
      <Col lg={12} md={12} sm={12} xs={12}>
        <div className={Styles.centerContent}>
          <p className={Styles.logo}>{label}</p>
        </div>
      </Col>
      <Col lg={12} md={12} sm={12} xs={12}>
        <div className={Styles.centerContent}>
        
          <Dropdown overlay={menu} trigger={["click"]} placement="bottomRight">
            <Button  className={Styles.dropdownButton}>
            <MenuFoldOutlined />
            </Button>
          </Dropdown>
        </div>
      </Col>
    </Row>
  );
};

export default Nav;
