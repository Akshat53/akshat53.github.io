import { Row, Col, Space, Divider } from "antd";
import React from "react";
import Title from "../Title";
import styles from '../component.module.css'
import AppContactForm from "./ContactForm";

const Contact = (props) => {
  const { subHeading, heading } = props;
  return (
    <Space
      direction="vertical"
      size="large"
      style={{
        display: "flex",
      }}
    >
      <Row justify={"center"}>
        <Col span={24}>
          <Title label={subHeading} title={heading} />
        </Col>
      </Row>

      <Row justify={"center"}>
        
        <Col lg={14} md={12} sm={12} xs={22}>
          <div className={styles.contact}>
                <AppContactForm />
          </div>
        </Col>
      </Row>
      <Divider />
    </Space>
  );
};

export default Contact;
