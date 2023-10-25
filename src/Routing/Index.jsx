import React from "react";
import Routing from "./Routing";
import WholeSalerRoutingLazyLoading from "./WholeSalerRoutingLazyLoading";
import RetailerRoutingLazyLoading from "./RetailerRoutingLazyLoading";
import AuthHeader from "../components/AuthHeader/AuthHeader";


const Index = () => {
  const __user = localStorage.getItem("user");

  return (
      <>
      <Routing/>
      <AuthHeader content={
      <WholeSalerRoutingLazyLoading/>}/>
      <RetailerRoutingLazyLoading/>
      </>
    );
};

export default Index;
