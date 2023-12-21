import React from "react";
import { Row, Col ,Divider} from "antd";
import Title from "../Title";
import styles from "../component.module.css";
import CardList from "./CardList";

const Experience = (props) => {
  const { heading, subHeading, options1 = [], options2 = [],expSectionRef } = props;
  return (
    <div ref={expSectionRef} >
      <Row justify={"center"}>
        <Col span={24}>
          <Title title={heading} label={subHeading} />
        </Col>
      </Row>
      <Divider />   
      <Row justify={"center"}>  
        <Col lg={8} md={12} sm={12} xs={24} className={styles.experience}>    
          <div>
          <h3 className={styles.cardListTitle}>Tech Stats</h3>
            <CardList data={options1} />
          </div>
        </Col>
        <Col lg={8} md={12} sm={12} xs={24} className={styles.experience}>
          <div>
          <h3 className={styles.cardListTitle}>Tools & Database</h3>
            <CardList data={options2} />
          </div>
        </Col>
        <Divider />
      </Row>

    </div>
  );
};

export default Experience;
