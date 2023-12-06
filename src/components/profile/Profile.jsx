import React from "react";
import styles from "../component.module.css";
import { Col, Row, Space } from "antd";
import Button from '../Button'


const Img = (props) => {
  const { src, label, name, designation,text,icon } = props;
  return (
    <>
      <Row justify="center">
        <Col lg={6} md={12} sm={24} xs={24} className={styles.column}>
          <div className={styles.container}>
            <img src={src} alt={label} className={styles.image} />
          </div>
        </Col>
        <Col lg={6} md={12} sm={24} xs={24}>
          <div className={styles.container}>
          
              <p>Hello, I'm</p>
              <p className={styles.name}>{name}</p>
              <p className={styles.designation}>{designation}</p>
              <Button label={text} icon={icon}/>

           
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Img;
