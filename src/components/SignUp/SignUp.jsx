import { Input, Form, Button, message, Spin, Select } from "antd";
import Text from "antd/lib/typography/Text";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../../services/userService";
import dot from "../../assets/img/dots.svg";
import {
  CheckOutlined,
  CloseOutlined,
  LoadingOutlined,
  LockOutlined,
} from "@ant-design/icons";
// import Particle from '../Particle'

function SignUp(props) {
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(false);
  const [lenghtError, setLengthError] = useState(true);
  const [specialCharError, setSpecialCharError] = useState(true);
  const [lowerUpperCaseError, setLowerUpperCaseError] = useState(true);
  const [role, setRole] = useState("RETAILER_ADMIN");

  const antIcon = (
    <LoadingOutlined style={{ fontSize: 24, color: "white" }} spin />
  );

  const onFinish = (values) => {
    setLoading(true);
    console.log("value to test the value of outcome", values);
    signUp({
      firstName: values.firstName,
      lastName: values.lastName,
      companyName: values.companyName,
      username: values.username,
      userPhoneNumber: values.userPhoneNumber,
      password: values.password,
      companyPhoneNumber: values.companyPhoneNumber,
      tinNumber: values.tinNumber,
      role,
      // profile: { companyName: values.companyName }
    })
      .then((res) => {
        setLoading(false);
        console.log("valueeeee", res);
        const success = res?.data?.success;
        if (success) {
          const userName = res?.data?.username;
          console.log("res", res);
          const params = new URLSearchParams();

          // params.append("phoneNumber", values.phoneNumber);
          params.append("userName", userName);
          // params.append("type", "Register");
          message.success("Registration success!");
          navigate({
            pathname: "/verificationPhone",
            search: params.toString(),
          });
        } else {
          const error = res.data?.error;
          setErrorMessage(error);
        }
      })
      .catch((err) => {
        if (err && err.response && err.response.data.message) {
          setErrorMessage(err.response.data.message);
        }
        setLoading(false);
      });
  };

  const onFinishFailed = (err) => {
    setLoading(false);
  };

  const roles = [
    {
      value: "RETAILER_ADMIN",
      label: "Retailer Admin",
    },
    {
      value: "WHOLESALER_ADMIN",
      label: "Wholesaler Admin",
    },
  ];

  const handleChange = (value) => {
    console.log(`selected ${value}`);
    setRole(value);
  };

  const textLink = ({ question, linkText,linkRoute }) => {
    return (
      <div className="flex px-5  bg-gray-200 text-xl">
        <h1>{question} </h1>
        <Link to={`${linkRoute}`} className="text-blue-600 mx-2">
          {linkText}
        </Link>
      </div>
    );
  };

  const questionText = [
    {
      question: "Already have account?",
      linkText: "Login",
      linkRoute:"/login"       
    },
    {
      question: "Register to become",
      linkText: "Wholesaler",
      linkRoute:"/SignUpWholeSaler"
    },
  ];

  return (
    <div className="flex justify-between dark:bg-primary_color absolute  top-0 w-full bg-red-400">
      <div className="bg-white w-full min-h-screen flex flex-col max-w-xl mx-auto m-4">
        <div className="pt-4 px-16">
          <div className="text-xl py-4 text-gray-700 dark:text-gray-300 flex justify-center items-center">
            <b className="text-blue-700 dark:text-gray-300 self-center ">
              CREATE ACCOUNT
            </b>
          </div>
        </div>
        {errorMessage && (
          <div>
            <Text className="text-sm mx-16 " type="danger">
              {errorMessage}
            </Text>
          </div>
        )}

        <Form
          name="signup"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
          className="w-full px-16 md:py-3"
          initialValues={role}
        >
          <div className="md:flex gap-4 ">
            <Form.Item
              name="firstName"
              label="First Name"
              rules={[
                { required: true, message: "Please input your first name!" },
              ]}
            >
              <Input
                type="text"
                placeholder="Enter you first name"
                className="md:w-52"
              />
            </Form.Item>
            <Form.Item
              name="lastName"
              label="Last Name"
              rules={[
                { required: true, message: "Please input your last name!" },
              ]}
            >
              <Input
                type="text"
                placeholder="Enter you last name"
                className="md:w-52"
              />
            </Form.Item>
          </div>

          <div className="md:flex gap-4 ">
            <Form.Item
              name="username"
              label="Username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                type="text"
                placeholder="Enter you username"
                className="md:w-52"
              />
            </Form.Item>

            <Form.Item
              name="userPhoneNumber"
              label="User Phone Number"
              rules={[
                {
                  required: true,
                  message: "Please input your userPhoneNumber!",
                },
                {
                  pattern: /^[0-9][0-9]*$/,
                  message: "Phone starts with 9",
                },
                {
                  max: 9,
                  message: "Maxiumm phone number 10 digit",
                },
              ]}
            >
              <Input
                type="text"
                placeholder="Enter you Phone Number"
                max="9"
                prefix="+251"
                className="md:w-52"
              />
            </Form.Item>
          </div>

          <div className="md:flex gap-4">
            <Form.Item
              name="companyName"
              label="Company Name"
              rules={[
                {
                  required: true,
                  message: "Enter your Company Name!",
                },
              ]}
            >
              <Input
                type="text"
                placeholder="Enter company name"
                className="md:w-52"
              />
            </Form.Item>
            <Form.Item
              name="companyPhoneNumber"
              label="Company Phone Number"
              rules={[
                {
                  required: true,
                  message: "Please input your companyPhoneNumber!",
                },
                {
                  pattern: /^[0-9][0-9]*$/,
                  message: "Phone starts with 9",
                },
                {
                  max: 9,
                  message: "Maxiumm phone number 10 digit",
                },
              ]}
            >
              <Input
                type="text"
                placeholder="Enter you Phone Number"
                max="9"
                prefix="+251"
                className="md:w-52"
              />
            </Form.Item>
          </div>

          <div className="md:flex gap-4">
            <Form.Item
              name="tinNumber"
              label="Tin Number"
              rules={[
                {
                  required: true,
                  message: "Please input your tinNumber!",
                },
              ]}
            >
              <Input
                type="Number"
                placeholder="Enter you tin number"
                // max="9"
                className="md:w-52 "
              />
            </Form.Item>

            <Form.Item
              name="role"
              label="Role"
              rules={[
                {
                  required: true,
                  // type: "email",
                  message: "Please input a role!",
                },
              ]}
              className="md:w-52"
            >
              <Select
                // defaultValue="RETAILER_ADMIN"
                placeholder="Select User Type"
                style={{
                  width: 210,
                }}
                className="md:w-52"
                allowClear
                options={roles}
                onChange={handleChange}
              />
            </Form.Item>
          </div>

          <div>
            <div className="md:flex gap-4">
              <Form.Item
                name="password"
                label="Password"
                rules={[
                  { required: true, message: "Password required!" },
                  {
                    validator: (_, value) => {
                      if (value.length >= 8) {
                        setLengthError(false);
                      } else {
                        setLengthError(true);
                      }
                      if (value.match(/[a-z]/) && value.match(/[A-Z]/)) {
                        setLowerUpperCaseError(false);
                      } else {
                        setLowerUpperCaseError(true);
                      }
                      if (value.match(/[^a-zA-Z\d]/) && value.match(/\d/)) {
                        setSpecialCharError(false);
                      } else {
                        setSpecialCharError(true);
                      }
                      return Promise.resolve();
                    },
                  },
                ]}
              >
                <Input.Password
                  placeholder="Password"
                  onFocus={() => {
                    setFocused(true);
                  }}
                  className="md:w-52"
                />
              </Form.Item>

              <Form.Item
                label="Confirm Password"
                name="Cpassword"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  { required: true, message: "Comfirm password required!" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      console.log("value", value);
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("password does not match")
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  placeholder="Comfirm Password"
                  className="md:w-52"
                />
              </Form.Item>
            </div>
            {focused ? (
              <div className="flex w-full border-[0.5px] rounded-md border-[#2563EB] p-2 gap-4 my-2">
                <div className="flex justify-around ">
                  <LockOutlined
                    style={{
                      color: "#2563EB",
                      fontSize: "20px",
                      marginTop: "4px",
                    }}
                  />
                </div>
                <div className="flex flex-col py-1">
                  <h1 className="text-md text-[#2563EB]">
                    {" "}
                    you password need to :
                  </h1>
                  <div className="flex gap-1">
                    {lenghtError ? (
                      <CloseOutlined
                        style={{
                          color: "#2563EB",
                        }}
                      />
                    ) : (
                      <CheckOutlined
                        style={{
                          color: "#1fc600",
                        }}
                      />
                    )}
                    <span
                      className={`text-xs ${
                        lenghtError ? " text-[#2563EB]" : "text-[#1fc600]"
                      }`}
                    >
                      be at least 8 characters long
                    </span>
                  </div>

                  <div className="flex gap-1">
                    {lowerUpperCaseError ? (
                      <CloseOutlined
                        style={{
                          color: "#2563EB",
                        }}
                      />
                    ) : (
                      <CheckOutlined
                        style={{
                          color: "#1fc600",
                        }}
                      />
                    )}

                    <h1
                      className={`text-xs ${
                        lowerUpperCaseError
                          ? "text-[#2563EB]"
                          : "text-[#1fc600]"
                      }`}
                    >
                      include both lower and upper case characters
                    </h1>
                  </div>

                  <div className="flex gap-1">
                    {specialCharError ? (
                      <CloseOutlined
                        style={{
                          color: "#2563EB",
                        }}
                      />
                    ) : (
                      <CheckOutlined
                        style={{
                          color: "#1fc600",
                        }}
                      />
                    )}

                    <h1
                      className={`text-xs ${
                        specialCharError ? "text-[#2563EB]" : "text-[#1fc600]"
                      }`}
                    >
                      include at least one number and symbol.
                    </h1>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>

          <Form.Item>
            <Button
              className="bg-black border-none p-4 text-center flex items-center justify-center"
              type="primary"
              htmlType="submit"
            >
              <span className="flex items-center">
                {loading && <Spin indicator={antIcon} className="mr-2" />}
                Sign Up
              </span>
            </Button>
          </Form.Item>
        </Form>

        {questionText.map((textContent)=>{
          return textLink(textContent)
        })}
      </div>
    </div>
  );
}

SignUp.propTypes = {};

export default SignUp;
