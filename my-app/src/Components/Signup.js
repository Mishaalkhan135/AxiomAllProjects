import React from "react";
import { useDispatch } from "react-redux";
import { Form, Input, Button } from "antd";
import { loginUser } from "../Redux/Actions/authActions";
import { Link } from "react-router-dom";
import { message } from "antd";
import allPaths from "../Config/path";
import axios from "axios";

const Signup = (props) => {
  const { history } = props;
  const dispatch = useDispatch();

  const onFinish = (values) => {
    console.log("values", values);
    axios.post(`http://localhost:8080/auth/register`, values).then((res) => {
      const { data } = res;
      console.log("data", data);

      if (data?.success) {
        dispatch(loginUser(data.user));

        message.success("SucccessFully Signup");
        return history.push(allPaths.Login);
      }
      message.error(data?.message);
    });
    //   if (values?.email === "admin@gmail.com" && values?.password === "admin") {
    //     dispatch(loginUser(values));
    //     console.log("********");
    //     message.success("Successful Login");
    //     return history.push(allPaths.Home);
    //   }
    //message.error("Invalid email or password");
  };
  return (
    <div>
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
            <h1>SignUp Form</h1>
            <Form.Item
              name='userName'
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
                {
                  message: "Please enter username",
                },
              ]}
            >
              <Input placeholder='Enter userName' />
            </Form.Item>
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
          <Link to={allPaths.Login}>Go To Login</Link>
        </Button>
      </div>
    </div>
  );
};
export default Signup;
