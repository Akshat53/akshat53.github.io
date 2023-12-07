import React from "react";
import { Row, Col } from "antd";
import Title from "../Title";
import styles from "../component.module.css";
import CardList from "./CardList";

const Experience = (props) => {
  const { heading, subHeading, options1 = [], options2 = [] } = props;
  return (
    <div>
      <Row justify={"center"}>
        <Col span={24}>
          <Title title={heading} label={subHeading} />
        </Col>
      </Row>
      <Row justify={"center"}>
        <Col lg={8} md={12} sm={12} xs={24} className={styles.experience}>
          <div>
            <CardList data={options1} />
          </div>
        </Col>
        <Col lg={8} md={12} sm={12} xs={24} className={styles.experience}>
          <div>
            <CardList data={options2} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Experience;
