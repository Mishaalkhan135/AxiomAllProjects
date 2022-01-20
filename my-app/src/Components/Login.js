import React from "react";
import { useDispatch } from "react-redux";
import { Form, Input, Button } from "antd";
import { loginUser } from "../Redux/Actions/authActions";
import { Link } from "react-router-dom";
import { message, notification } from "antd";
import allPaths from "../Config/path";
const Login = (props) => {
  const { history } = props;
  const dispatch = useDispatch();
  console.log("props", props);
  const onFinish = (values) => {
    console.log("values", values);
    if (values?.email === "admin@admin.com" && values?.password === "admin") {
      dispatch(loginUser(values));
      console.log("********");
      message.success("Successful Login");
      return history.push(allPaths.Home);
    }
    message.error("Invalid email or password");
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          width: "80%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Form
          name='basic'
          onFinish={onFinish}
          requiredMark={false}
          style={{ width: "100%" }}
          // onFinishFailed={onFinishFailed}
        >
          <h1>Login Form</h1>
          <Form.Item
            name='email'
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
              {
                type: "email",
                message: "Please enter valid email",
              },
            ]}
          >
            <Input placeholder='Enter Email' type='email' />
          </Form.Item>

          <Form.Item
            name='password'
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password placeholder='Password' />
          </Form.Item>

          <Form.Item>
            <Button type='primary' block htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      <Button type='primary'>
        <Link to={allPaths.Home}>Go To Home</Link>
      </Button>
    </div>
  );
};
export default Login;
