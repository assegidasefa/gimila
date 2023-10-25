import { Form, Input, Button, message, Spin } from "antd";
import React, { useRef, useState } from "react";
import { BiShieldQuarter } from "react-icons/bi";
import { useNavigate, useLocation } from "react-router-dom";
import dot from "../../assets/img/dots.svg";
import { resendOTPCode, verifyOTPCode } from "../../services/userService";
import { LoadingOutlined } from "@ant-design/icons";
import OtpInput from "react-otp-input";

export default function OTPVerificationSignup() {
  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location?.search);
  const phoneParam = query.get("phoneNumber");
  const phoneNumber = phoneParam;
  const username = query.get("userName");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [optCode, setOtpCode] = useState("");

  const antIcon = (
    <LoadingOutlined style={{ fontSize: 24, color: "white" }} spin />
  );

  const onFinish = (values) => {
    setLoading(true);
    // let code = ''
    // Object.values(values).map(item => { return code = code + item })
    // console.log(code)
    if (optCode.length !== 5) {
      setLoading(false);
      return setErrorMessage("Invalid confirmation code.");
      // message.error('Invalid confirmation code.')
    }

    verifyOTPCode({ phoneNumber, code: optCode,username })
      .then((res) => {
        setLoading(false);
        const msg = res.data?.message;
        const success = res.data?.success;
        const error = res.data?.error;
        if (success) {
          const params = new URLSearchParams();
          params.append("phoneNumber", phoneNumber);
          params.append("username", username);
          message.success(msg, 1, () => {
            // history.push({
            //     pathname: '/userApprovement',
            //     search: params.toString()
            // })
            navigate("/login")

            // navigate("UserApprovement", { search: params.toString() });
          });
        } else {
          setErrorMessage(error);
        }
      })
      .catch((err) => {
        if (err && err.response && err.response.data.message) {
          setErrorMessage(err.response.data.message);
          // message.error(err.response.data.message)
        }
        setLoading(false);
      });
  };

  const resendOtp = () => {
    resendOTPCode({ phoneNumber, username })
      .then((resp) => {
        const info = resp.data?.message;
        message.success(info);
        // localStorage.setItem('user', JSON.stringify(resp.data))
        // if (resp.data.role === 'IVR_ADMIN') history.push('/admin')
        // else history.push('/')
      })
      .catch((err) => {
        if (err && err.response && err.response.data.message) {
          setErrorMessage(err.response.data.message);
          // message.error(err.response.data.message)
        }
      });
  };

  const formValue = [
    {
      id: 1,
      name: "digit1",
      maxLength: 1,
    },
    {
      id: 2,
      name: "digit2",
      maxLength: 1,
    },
    {
      id: 3,
      name: "digit3",
      maxLength: 1,
    },
    {
      id: 4,
      name: "digit4",
      maxLength: 1,
    },
    {
      id: 5,
      name: "digit5",
      maxLength: 1,
    },
    {
      id: 6,
      name: "digit6",
      maxLength: 1,
    },
  ];

  const handleChange = (otp) => {
    setOtpCode(otp);
  };

  const clear = () => {
    setOtpCode("");
  };

  const onFinishFailed = () => {};
  return (
    <div className="min-h-screen py-8 flex justify-center items-start bg-slate-300">
      <div className="bg-blue-50 w-full max-w-lg  flex flex-col items-center justify-center p-4 shadow-xl rounded-xl z-20">
        <BiShieldQuarter className="text-gray-600 w-12 h-12" />
        <h1 className="text-xl font-bold text-gray-800 my-2">Confirmation</h1>
        {errorMessage && <p className="text-red-400 py-2">{errorMessage}</p>}
        <p className=" mx-8 text-gray-600 my-3 ">
          Enter the verification code that was sent to the phone number
          <span className="mx-2 text-gray-700">{phoneNumber}</span>
          you provided.
          <div
            onClick={(e) => resendOtp()}
            className="text-blue-500 cursor-pointer"
          >
            Resend again
          </div>
        </p>

        <div className="absolute bottom-0 left-2/3 opacity-30 z-10">
          <img className="w-40 z-0" alt="pattern" src={dot} />
        </div>
        <Form
          className="w-3/4"
          name="vertical"
          layout="vertical"
          initialValues={{}}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <div className="flex mb-6">
            <OtpInput
              value={optCode}
              onChange={handleChange}
              numInputs={5}
              isInputNum={true}
              hasErrored={true}
              separator={<span>-</span>}
              //   containerStyle={{  padding: "15px" }}
              inputStyle={{
                padding: "6px",
                fontSize: "20px",
                fontWeight: "bold",
                borderColor: "black   ",
                borderRadius: "3px",
                width: "40px",
                margin: "7px",
                borderWidth: "1px",
              }}
              renderInput={(inputProps, index) => <input {...inputProps} />}
            />
          </div>
          <div className="flex justify-center items-center gap-10  w-full">
            <Button
              className="dark:border dark:border-gray-300"
              type="primary"
              htmlType="button"
              style={{
                backgroundColor: "#131D34",
                borderColor: "#131D34",
                borderRadius: "10px",
                color: "white",
              }}
              onClick={clear}
            >
              Clear
            </Button>

            <Button
              className="dark:border dark:border-gray-300"
              type="primary"
              htmlType="submit"
              style={{
                backgroundColor: "#131D34",
                borderColor: "#131D34",
                borderRadius: "10px",
                color: "white",
              }}
            >
              <span className="flex items-center ">
                {loading && <Spin indicator={antIcon} className="mr-2" />}
                Confirm
              </span>
            </Button>
          </div>
        </Form>
      </div>

      <div className="absolute hidden md:block top-64 -left-10 opacity-40">
        <img className="w-32" alt="pattern" src={dot} />
      </div>
    </div>
  );
}
