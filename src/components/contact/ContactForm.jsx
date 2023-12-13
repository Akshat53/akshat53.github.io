import React, { useState } from "react";
import { Col, Row } from "antd";
import FormInput from "../formItems/Input";
import styles from "../component.module.css";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const initialValues = {
  fname: "",
  lname: "",
  number: "",
  email: "",
  message: "",
};
const AppContactForm = () => {
  const serviceId = "service_24buz96";
  const templateId = "template_46ekshk";
  const publicKey = "zAsvr6xiuMT8jFJgk";
  const [successMessage, setSuccessMessage] = useState("");

  const validationSchema = Yup.object().shape({
    fname: Yup.string().required("First Name is required"),
    lname: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    number: Yup.string().required("Contact Number is required"),
    message: Yup.string().required("Message is required"),
  });

  const sendEmail = async (templateParams) => {
    try {
      const response = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            to_name: templateParams.template_params.to_name,
            from_name: templateParams.template_params.from_name,
            email: templateParams.template_params.email,
            number: templateParams.template_params.number,
            message: templateParams.template_params.message,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setSuccessMessage(
          "Thank you for Contact ! i will get in touch very soon "
        );
        setTimeout(() => {
          setSuccessMessage("");
        }, 5000); // Clear success message after 5 seconds
      } else {
        console.error("Failed to send email:", response.statusText);
      }
    } catch (error) {
      console.error("Error sending email:", error.message);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        const templateParams = {
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            to_name: "Akshat",
            from_name: values.fname,
            email: values.email,
            number: values.number,
            message: values.message,
          },
        };

        sendEmail(templateParams);

        resetForm();
      }}
    >
      {({
        values,
        errors,
        touched,
        setFieldValue,
        handleSubmit,
        handleChange,
      }) => (
        <Form
          onSubmit={handleSubmit}
          style={{
            width: "100%",
          }}
        >
          <Row justify={"space-evenly"}>
            <Col lg={9} md={20} sm={20} xs={20}>
              <p className={styles.errorMessages}>
                <ErrorMessage name="fname" />
              </p>
              <FormInput
                label=""
                name="fname"
                inputProps={{
                  className: styles.formInput,
                }}
                value={values.fname}
                onChange={handleChange}
                placeholder={"First Name"}
              />
            </Col>
            <Col lg={9} md={20} sm={20} xs={20}>
              <p className={styles.errorMessages}>
                <ErrorMessage name="lname" />
              </p>
              <FormInput
                label=""
                name="lname"
                inputProps={{
                  className: styles.formInput,
                }}
                value={values.lname}
                onChange={handleChange}
                placeholder={"Last Name"}
              />
            </Col>
            <Col lg={9} md={20} sm={20} xs={20}>
            <p  className={styles.errorMessages}>
                <ErrorMessage name="email" />
              </p>
              <FormInput
                label=""
                name="email"
                inputProps={{
                  className: styles.formInput,
                }}
                value={values.email}
                onChange={handleChange}
                placeholder={"Email"}
              />
            </Col>
            <Col lg={9} md={20} sm={20} xs={20}>
            <p  className={styles.errorMessages}>
                <ErrorMessage name="number" />
              </p>
              <FormInput
                label=""
                name="number"
                inputProps={{
                  className: styles.formInput,
                }}
                value={values.number}
                onChange={handleChange}
                placeholder={"Contact Number"}
              />
            </Col>
            <Col span={20}>
            <p  className={styles.errorMessages}>
                <ErrorMessage name="message" />
              </p>
              <FormInput
                label=""
                name="message"
                inputProps={{
                  className: styles.formInput,
                }}
                value={values.message}
                onChange={handleChange}
                placeholder={"Message"}
              />
            </Col>
          <Col lg={6} md={20} sm={20} xs={20}>{successMessage && <p>{successMessage}</p>}
          </Col>
            <Col lg={6} md={20} sm={20} xs={20}>
              <button type="submit" className={styles.submitButton}>
                Submit
              </button>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
};
export default AppContactForm;
