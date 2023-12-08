import React from "react";
import { Row, Col, Space, Divider } from "antd";
import Title from "../Title";
import AppCarousel from "../Carousel";
import { carouselOptions } from "../../constrants";



const Project = (props) => {
  const { heading, subHeading } = props;
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
        <Col lg={6} md={6} sm={12} xs={18}>
          <AppCarousel >
            {carouselOptions.map((item,i) => {
                return item.comp
            })}
          </AppCarousel>
        </Col>
      </Row>
      <Divider />
    </Space>
  );
};

export default Project;
