import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { v4 as uuidv4 } from "uuid";

import LoginButton from "../Components/LoginPages/LoginButton";
import { useNavigate } from "react-router-dom";
import LoginWelcome from "../Components/LoginPages/LoginWelcome";

const Gradient = keyframes`
0% {
  background-position: 0% 50%;
}
50% {
  background-position: 100% 50%;
}
100% {
  background-position: 0% 50%;
}
`;
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background: linear-gradient(
    45deg,
    rgba(238, 174, 202, 1),
    rgba(148, 187, 233, 1)
  );
  background-size: 400% 400%;
  animation: ${Gradient} 30s ease infinite;
  z-index: -10;
  position: absolute;
`;

const Address = styled.input`
  margin-bottom: 20px;
  font-size: 30px;
  border-width: 0;
  border-radius: 10px;
  @media only screen and (max-width: 600px) {
    font-size: 20px;
    border-radius: 5px;
  }
  &::placeholder {
    color: lightgray;
  }
`;

const LoginPages = () => {
  const [addr, setAddr] = useState<string>("");

  const sessionId = uuidv4();

  const navigate = useNavigate();

  const authForm = `http://${addr}/miauth/${sessionId}`;
  const hostname = window.location.host;
  const protocol = window.location.protocol;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddr(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("server", addr);

    window.open(
      `${authForm}?name=Misskey-Radio&callback=${protocol}//${hostname}/callbackpage&permission=read:account`,
      "_self"
    );
  };

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      navigate("/mainpage");
    }
  }, []);

  return (
    <div>
      <Wrapper>
        <LoginWelcome />
        <form
          style={{
            display: "flex",
            flexFlow: "column",
            alignItems: "center",
          }}
          id="login-form"
          onSubmit={handleSubmit}
        >
          <Address
            placeholder="서버주소"
            name="address"
            onChange={handleChange}
          />
          <LoginButton />
        </form>
        <Background />
      </Wrapper>
    </div>
  );
};

export default LoginPages;
