import React, { useEffect, useState } from "react";
import { Button, Input, Form, Spin } from "antd";
// import { login } from '../../services/userService'
// import { useHistory } from 'react-router'
import { Link, useNavigate } from "react-router-dom";

import dot from "../../assets/img/dots.svg";
import { LoadingOutlined } from "@ant-design/icons";
import { login } from "../../services/userService";

function Login(props) {
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [codeVerified, setCodeVerified] = useState(false);
  const [loading, setLoading] = useState(false);

  //   useEffect(()=>{
  //     const user = localStorage.getItem("user")
  //     if(user){
  //       const _user = JSON.parse(user)
  //       console.log("user ",_user)
  //       const _role = _user.role
  //       if (_role === 'IVR_ADMIN') {
  //         console.log("role admin")
  //         history.push('/admin')
  //         setLoading(false)
  //         return;
  //       }
  //       if (_role === "IVR_USER") {
  //         console.log("role user")
  //         history.push('/dashboard')
  //         setLoading(false)
  //         return;
  //       }
  //     }
  //   },[])

  const antIcon = (
    <LoadingOutlined style={{ fontSize: 24, color: "white" }} spin />
  );

  const onFinish = (values) => {
    console.log("values", values);

    setLoading(true);
    const { username, password } = values;

    login({ username, password }).then((res) => {
      // const _codeVerified = res.data?.user?.isPhoneVerified
      // const _phoneNumber = res.data?.user?.phoneNumber
      // const _status = res.data?.user?.status
      // const userId = res.data?.user?.id
      console.log("res lognin",res)
      const success = res.data?.success;
      const error = res.data?.error;
      const _role = res.data?.message?.role;

      // console.log('user role: ', _role)

      if (success) {
        localStorage.setItem("user", JSON.stringify(res?.data?.message));
        if (_role === "RETAILER_ADMIN") {
          console.log("RETAILER_ADMIN");
          navigate("/admin");
          setLoading(false);
          return;
        }
        if (_role === "WHOLESALER_ADMIN") {
          console.log("WHOLESALER_ADMIN");
          navigate("/dashboard");
          setLoading(false);
          return;
        }
      }
      //else {
      //   const isUser = Boolean(res.data?.user)
      //   if(error && !isUser){
      //     setError(error)
      //     setLoading(false)
      //     return
      //   }
      //   else if (!_codeVerified && isUser) {
      //     const params = new URLSearchParams()
      //     params.append('email', values.email)
      //     params.append('phoneNumber', _phoneNumber)
      //     params.append("id", userId)
      //     history.push({
      //       pathname: '/signupVerification',
      //       search: params.toString()
      //     })
      //     setLoading(false)
      //   } else if ((_status==="UNAPPROVED" || _status==="DEACTIVATED")) {
      //     setError(error)
      //     setLoading(false)
      //   } else {
      //     setError(error)
      //     setLoading(false)
      //   }
      //   setLoading(false)
      // }
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    setError(errorInfo);
    setLoading(false);
  };

  return (
    <>
      <div className="bg-gray-100 flex justify-between dark:bg-primary_color fixed h-screen w-full top-0">
        <div className="relative w-2/3  h-full hidden lg:flex flex-col justify-between p-8 text-white">
          <div className="absolute ">
            {/* <Particle /> */}
            <header className="mx-2 my-4">
              <span className="text-5xl font-bold opacity-80 text-black">JIMILA</span>
              <h1 className="text-4xl font-extrabold  text-black mt-36">
                     Trade with Confidence Buy with Trust <br></br> It's All Here.
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
          <div className="h-24 w-24 absolute right-40 top-32 ">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="
              #3B82F6
              "
                d="M66.4,-52.7C81.7,-33.7,86.8,-6.3,80.8,17.8C74.7,41.9,57.5,62.7,35.7,72.7C13.9,82.6,-12.5,81.6,-34.4,71.2C-56.4,60.7,-73.9,40.8,-79.9,17.4C-86,-6.1,-80.6,-33,-65.4,-52C-50.1,-70.9,-25.1,-81.8,0.2,-82C25.5,-82.2,51,-71.6,66.4,-52.7Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
          <div className="h-16 w-12 absolute right-1/2 top-2/3 ">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#19BDFA"
                d="M66.4,-52.7C81.7,-33.7,86.8,-6.3,80.8,17.8C74.7,41.9,57.5,62.7,35.7,72.7C13.9,82.6,-12.5,81.6,-34.4,71.2C-56.4,60.7,-73.9,40.8,-79.9,17.4C-86,-6.1,-80.6,-33,-65.4,-52C-50.1,-70.9,-25.1,-81.8,0.2,-82C25.5,-82.2,51,-71.6,66.4,-52.7Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
        </div>

        <div className="bg-white w-full min-h-screen flex flex-col max-w-xl  mx-auto ">
          <div className="pt-16 md:px-16 flex justify-center items-center ">
            <div className="text-2xl text-gray-700 dark:text-gray-300 ">
              Welcome to
              <span className="cursor-pointer text-blue-500 dark:text-gray-300 font-bold ">
                YEGNATELE
              </span>
            </div>
          </div>

          {error && (
            <span className="mx-16 px-4 py-1 bg-red-300 text-red-900 font-bold rounded-sm">
              {error}
            </span>
          )}
          <div className="w-full flex justify-center items-center">
            <Form
              name="basic"
              layout="vertical"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className=" md:w-3/4 px-16 py-8 dark:text-white"
            >
              <Form.Item
                label="User Name"
                name="username"
                className="dark:text-white"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input placeholder="ex: abebe" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password placeholder="Password" />
              </Form.Item>
              <div className="flex justify-between">
                <Form.Item className="text-center">
                  <Button
                    className="w-full bg-primary_color border-none p-4 bg-black  text-center flex items-center justify-center"
                    type="primary"
                    htmlType="submit"
                  >
                    <span>
                      {loading && <Spin indicator={antIcon} className="mr-2" />}
                      Login
                    </span>
                  </Button>
                </Form.Item>

                <div
                  onClick={(e) => navigate("/forgot")}
                  className="text-blue-500 cursor-pointer"
                >
                  Forgot password?
                </div>
              </div>
            </Form>
          </div>
          <div className="flex p-14 bg-gray-200 dark:bg-primary_color ">
            <h1 className="dark:text-gray-300 ">Still without account? </h1>
            <Link to={"/SignUpWholeSaler"} className="text-blue-600  mx-2">
              {" "}
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

Login.propTypes = {};

export default Login;
