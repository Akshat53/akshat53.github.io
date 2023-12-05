import React from "react";
import Nav from "../components/Nav";
import { Col, Row } from 'antd';
import { navOptions } from "../constrants";




const Home = () => {
  return <>
      <Row>
      <Col span={24}>
        <Nav options={navOptions} label={'AS'}/>

      </Col>
    </Row>
  </>;
};

export default Home;
