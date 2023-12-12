import React from "react";
import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import FormInput from "../formItems/Input";
import styles from "../component.module.css";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const AppContactForm = () => (
  <Form
    style={{
      width: "100%",
    }}
  >
    <Row justify={"space-evenly"}>
      <Col span={9}>
        <FormInput
          label=""
          name="fname"
          inputProps={{
            className: styles.formInput,
          }}
          placeholder={"First Name"}
        />
      </Col>
      <Col span={9}>
        <FormInput
          label=""
          name="lname"
          inputProps={{
            className: styles.formInput,
          }}
          placeholder={"Last Name"}
        />
      </Col>
      <Col span={11}>
        <FormInput
          label=""
          name="email"
          inputProps={{
            className: styles.formInput,
          }}
          placeholder={"Email"}
        />
      </Col>
      <Col span={7}>
        <FormInput
          label=""
          name="number"
          inputProps={{
            className: styles.formInput,
          }}
          placeholder={"Contact Number"}
        />
      </Col>
      <Col span={20}>
        <FormInput
          label=""
          name="message"
          inputProps={{
            className: styles.formInput,
          }}
          placeholder={"Message"}
        />
      </Col>
      <Col span={20}>
        <Button >Submit</Button>
      </Col>
      {/* <Col span={12}>
        <FormInput label="" name="lname" />
      </Col> */}
      {/* <Col span={24}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Col> */}
    </Row>
  </Form>
);
export default AppContactForm;
