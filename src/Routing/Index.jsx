import React from "react";
import Routing from "./Routing";
import WholeSalerRoutingLazyLoading from "./WholeSalerRoutingLazyLoading";
import RetailerRoutingLazyLoading from "./RetailerRoutingLazyLoading";
import AuthHeader from "../components/AuthHeader/AuthHeader";

const Index = () => {
  // const __user = localStorage.getItem("user");
  const user = JSON.parse(localStorage.getItem("user"));

  // console.log("consfff",__user)

  return (
    <>
      {/* {
        user ? (
        user.role === "WHOLESALER_ADMIN" ? 
        <AuthHeader content={<WholeSalerRoutingLazyLoading/>}/> 
        :
        <RetailerRoutingLazyLoading/>
        )
        : 
        <Routing/>
       } */}

      <Routing />
      <WholeSalerRoutingLazyLoading />
      <RetailerRoutingLazyLoading />
    </>
  );
};

export default Index;
