import React from "react";
import { Row, Col } from "antd";
import Title from "../Title";
import styles from "../component.module.css";

const About = (props) => {
  const { heading, src } = props;
  return (
    <div>
      <Row justify={"center"} className={styles.about}>
        <Col>
          <Title title={heading} />
        </Col>
      </Row>
      <Row justify={"center"}>
        <Col lg={6}>
          <img src={src} width={"70%"} />
        </Col>
        <Col lg={12}>dsdcvb kjvbkjsdzbk</Col>
      </Row>
    </div>
  );
};

export default About;
