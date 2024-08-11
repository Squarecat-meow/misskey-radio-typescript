import React from "react";
import styled from "styled-components";

import miLogo from "../../static/icon-256x256.png";

const LoginButton = () => {
  const Background = styled.button`
    background-color: aliceblue;
    width: 20rem;
    height: 4rem;
    border-radius: 10px;
    border-width: 0;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    @media only screen and (max-width: 600px) {
      width: 16em;
      height: 3em;
      border-radius: 5px;
    }
    &:hover {
      box-shadow: 0 6px 6px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }
  `;

  const MiLogo = styled.img`
    width: 3rem;
    height: 3rem;
    padding-left: 10px;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    @media only screen and (max-width: 600px) {
      width: 2rem;
      height: 2rem;
      padding-left: 5px;
    }
  `;

  const VLine = styled.div`
    border-left: 1px solid gray;
    height: 40px;
    margin-left: 20px;
    @media only screen and (max-width: 600px) {
      margin-left: 15px;
      height: 20px;
    }
  `;

  const LoginText = styled.span`
    font-size: 20px;
    color: gray;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    @media only screen and (max-width: 600px) {
      font-size: 16px;
    }
  `;

  return (
    <div>
      <Background type="submit" form="login-form">
        <MiLogo src={miLogo} alt="Misskey Logo" />
        <VLine />
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <LoginText>미스키로 로그인</LoginText>
        </div>
      </Background>
    </div>
  );
};

export default LoginButton;
