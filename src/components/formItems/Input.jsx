import { Form, Input } from "antd";
import React from "react";

const FormInput = (props) => {
  const {
    containerProps,
    inputProps,
    name,
    label,
    error,
    touched,
    onChange,
    value,
    placeholder,
    type,
    disabled,
  } = props;
  // const displayPlaceholder = error && touched ? error : placeholder;

  return (
    <Form.Item
      {...containerProps}
      label={label}
      validateStatus={error && touched ? "error" : ""}
      help={error && touched ? error : ""}
    >
      <Input
       {...inputProps}
       name={name}
       value={value}
       onChange={onChange}
       placeholder={placeholder}
       type={type}
       disabled={disabled}
     
      />
    </Form.Item>
  );
};

export default FormInput;
