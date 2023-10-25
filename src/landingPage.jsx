import logo from "./logo.svg";
import "./App.css";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Space,
  Table,
  TreeSelect,
} from "antd";
import { useState } from "react";
import AnimeEcommerce from "../src/assets/lottie/animation_ecommerce.json"
import Lottie from 'lottie-react';


// const onFinish = (value) => {
//   console.log(value);
// };

function App() {
  const products = [
    {
      pName: "Shoes",
      price: "20br",
    },
    {
      pName: "Shirt",
      price: "15br",
    },
    {
      pName: "Hat",
      price: "10br",
    },
    {
      pName: "Socks",
      price: "5br",
    },
    {
      pName: "pjama",
      price: "5br",
    },
    {
      pName: "bag",
      price: "5br",
    },
    {
      pName: "ring",
      price: "5br",
    },
  ];
  return (
    <>
      <div className="w-full flex  justify-center items-center p-3">
        <div className="w-1/2">
          <h1 className="flex justify-center text-3xl self-center bg-red-500 mt-24">
            The Product you want here
          </h1>
          <h1 className="flex justify-center text-sm text-gray-500 items-center mt-44">
            Forget about spam, advertising mailings, hacking and attacking
            robots. Keep your real mailbox clean and secure. Temp Mail provides
            temporary, secure, anonymous, free, disposable email address.
          </h1>
        </div>
        <div className="w-1/2 flex justify-center">
          <Lottie animationData={AnimeEcommerce} width={200} height={200}/>
        </div>
      </div>
      <h1 className="flex justify-center text-2xl font-bold">Our New Product</h1>
      <div className="flex bg-red-500">
        {products.map((pro) => (
          <div key={pro.pName} className="w-44 h-44 bg-slate-600 m-5">
            <p>{pro.pName}</p>
            <p>{pro.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
