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

function SignUpWholeSaler(props) {
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
      role: "WHOLESALER_ADMIN",
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

  const textLink = ({ question, linkText, linkRoute }) => {
    return (
      <div className="flex px-5 text-black md:ml-12 text-sm" key={linkText}>
        <h1>{question} </h1>
        <Link to={`${linkRoute}`} className="text-blue-600 mx-2 hover:scale-110">
          {linkText}
        </Link>
      </div>
    );
  };

  const questionText = [
    {
      question: "Already have account?",
      linkText: "Login",
      linkRoute: "/login",
    },
    {
      question: "Register to become",
      linkText: "Retailer",
      linkRoute: "/SignUpRetailer",
    },
  ];

  return (
    <div className="bg-gray-100 flex justify-between dark:bg-primary_color absolute  min-h-screen top-0 w-full">
      <div className="relative w-2/3  h-full hidden lg:flex flex-col justify-between p-8 text-white">
        <div className="absolute top-1/3">
          {/* <Particle /> */}
          <header className="mx-2 my-4">
            <span className="text-5xl text-black font-bold opacity-80 flex justify-center z-50">
              Welcome !!
            </span>
            <h1 className="text-4xl font-extrabold  md:mt-20 text-black">
              Your Products, Our Platform, Endless Possibilities!
            </h1>
          </header>
          <div className="absolute top-64 -left-10 opacity-40">
            <img className="w-32" alt="pattern" src={dot} />
          </div>

          <div className="absolute top-80 left-1/2 opacity-40">
            <img className="w-32" alt="pattern" src={dot} />
          </div>
        </div>

        <div className="h-24 w-40 absolute right-6 top-0 -mt-2">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#ADD8E6"
              d="M66.4,-52.7C81.7,-33.7,86.8,-6.3,80.8,17.8C74.7,41.9,57.5,62.7,35.7,72.7C13.9,82.6,-12.5,81.6,-34.4,71.2C-56.4,60.7,-73.9,40.8,-79.9,17.4C-86,-6.1,-80.6,-33,-65.4,-52C-50.1,-70.9,-25.1,-81.8,0.2,-82C25.5,-82.2,51,-71.6,66.4,-52.7Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div className="h-24 w-24 absolute right-40 top-56">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#3B82F6"
              d="M66.4,-52.7C81.7,-33.7,86.8,-6.3,80.8,17.8C74.7,41.9,57.5,62.7,35.7,72.7C13.9,82.6,-12.5,81.6,-34.4,71.2C-56.4,60.7,-73.9,40.8,-79.9,17.4C-86,-6.1,-80.6,-33,-65.4,-52C-50.1,-70.9,-25.1,-81.8,0.2,-82C25.5,-82.2,51,-71.6,66.4,-52.7Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div className="h-16 w-12 absolute right-1/2 top-20 ">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#19BDFA"
              d="M66.4,-52.7C81.7,-33.7,86.8,-6.3,80.8,17.8C74.7,41.9,57.5,62.7,35.7,72.7C13.9,82.6,-12.5,81.6,-34.4,71.2C-56.4,60.7,-73.9,40.8,-79.9,17.4C-86,-6.1,-80.6,-33,-65.4,-52C-50.1,-70.9,-25.1,-81.8,0.2,-82C25.5,-82.2,51,-71.6,66.4,-52.7Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>

      <div className="bg-white w-full  flex flex-col max-w-xl mx-auto m-3 pb-4 rounded-lg">
        <div className="pt-4 px-16">
          <div className="text-xl py-4 text-gray-700 dark:text-gray-300 flex justify-center items-center">
            <b className="text-blue-700 dark:text-gray-300 self-center text-sm md:text-2xl">
              CREATE WHOLE SALER ACCOUNT
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
              label="Phone Number"
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
        {questionText.map((textContent) => {
          return textLink(textContent);
        })}
      </div>
    </div>
  );
}

SignUpWholeSaler.propTypes = {};

export default SignUpWholeSaler;
