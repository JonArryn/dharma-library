import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const navigateTimer = () => {
    setTimeout(() => navigate("/app"), 3000);
  };
  return (
    <>
      <div>Navigating you to app</div>
      {navigateTimer()}
    </>
  );
};

export default Login;
