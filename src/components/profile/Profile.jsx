import React from "react";
import styles from "../component.module.css";
import { Col, Row, Space } from "antd";
import Button from "../Button";

const Profile = (props) => {
  const { src, label, name, designation, options = [] } = props;
  return (
    <>
      <Row justify="center" align={"middle"} className={styles.pad}>
        <Col lg={6} md={12} sm={24} xs={24} className={styles.column}>
          <div className={styles.container}>
            <img src={src} alt={label} className={styles.image} />
          </div>
        </Col>
        <Col lg={6} md={12} sm={24} xs={24}>
          <div className={styles.container}>
            <p style={{ margin: "0px" }}>Hello, I'm</p>
            <p className={styles.name}>{name}</p>
            <p className={styles.designation}>{designation}</p>

            {options.map((item, i) => {
              return <Button label={item.text} icon={item.icon} stats={item.stats}/>;
            })}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Profile;
