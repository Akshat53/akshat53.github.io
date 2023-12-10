import React from "react";
import { Menu, Row, Col, Button, Dropdown } from "antd";
import Styles from "../components/component.module.css";
import { MenuFoldOutlined } from "@ant-design/icons";

const Nav = (props) => {
  const { options = [], label } = props;

  const menu = (
    <Menu>
      {options.map((option) => (
        <Menu.Item key={option.key}>{option.label}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Row align="middle" justify="space-between">
      <Col lg={12} md={12} sm={12} xs={6}>
        <div className={Styles.centerContent}>
          <p className={Styles.logo}>{label}</p>
        </div>
      </Col>
      <Col lg={12} md={12} sm={12} xs={6}>
        <div className={Styles.centerContent}>
          <Dropdown overlay={menu} trigger={["click"]} placement="bottomRight">
            <Button className={Styles.dropdownButton}>
              <MenuFoldOutlined />
            </Button>
          </Dropdown>
        </div>
      </Col>
    </Row>
  );
};

export default Nav;
