import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivatePages = () => {
  const userIsLogin = localStorage.getItem("token");

  return <div>{userIsLogin ? <Outlet /> : <Navigate to="/" />}</div>;
};

export default PrivatePages;
