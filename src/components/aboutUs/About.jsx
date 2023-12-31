import React from "react";
import { Row, Col, Divider } from "antd";
import Title from "../Title";
import styles from "../component.module.css";
import Card from "../Card";

const About = (props) => {
  const { heading, src, options = [], text,subHeading,aboutSectionRef } = props;
  return (
    <div className={styles.about} ref={aboutSectionRef}>
      <Row justify={"center"}>
        <Col span={24}>
          <Title title={heading} label={subHeading}/>
        </Col>
      </Row>
      <Divider />
      <Row justify={"center"}>
        <Col lg={6} md={8} sm={20} xs={20}>
          <div className={styles.imgSec}>
            <img src={src} width={"100%"} alt={'sba'} />
          </div>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Row justify={"center"}>
            <Col lg={24} md={24} sm={24} xs={24}>
              <div className={styles.subCard}>
                {options.map((item, i) => { 
                  return (
                    <Card
                      icon={item.icon}
                      prof={item.prof}
                      desg={item.desg}
                      stats={item.stats}
                    />
                  );
                })}
              </div>
            </Col>
            <Col lg={20} md={21} sm={21} xs={20}>
              <div className={styles.aboutMe}>
                <p>{text}</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Divider />
    </div>
  );
};

export default About;
