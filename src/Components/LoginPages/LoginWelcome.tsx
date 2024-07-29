import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const rotateCube = keyframes`
    0% {transform: rotateX(0deg);}
    12.5%, 25% {transform: rotateX(-90deg);} 
    37.5%, 50% {transform: rotateX(-180deg);} 
    62.5%, 75% {transform: rotateX(-270deg);} 
    87.5%, 100% {transform: rotateX(-360deg);}
`;

const FrontOpacity = keyframes`
    0% { opacity: 1 }
    12.5%, 25% { opacity: 0 }
    37.5%, 50% { opacity: 0 }
    62.5%, 75% { opacity: 0 }
    87.5%, 100% { opacity: 1 }
`;

const TopOpacity = keyframes`
    0% { opacity: 0 }
    12.5%, 25% { opacity: 1 }
    37.5%, 50% { opacity: 0 }
    62.5%, 75% { opacity: 0 }
    87.5%, 100% { opacity: 0 }
`;

const BottomOpacity = keyframes`
    0% { opacity: 0 }
    12.5%, 25% { opacity: 0 }
    37.5%, 50% { opacity: 1 }
    62.5%, 75% { opacity: 0 }
    87.5%, 100% { opacity: 0 }
`;

const BackOpacity = keyframes`
    0% { opacity: 0 }
    12.5%, 25% { opacity: 0 }
    37.5%, 50% { opacity: 0 }
    62.5%, 75% { opacity: 1 }
    87.5%, 100% { opacity: 0 }
`;

const Wrapper = styled.div`
  width: 50vw;
  height: 16vh;
  margin-bottom: 30px;
  @media only screen and (max-width: 600px) {
    width: 80vw;
    height: 5vh;
  }
`;

const Box = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-flow: column;
  transform-style: preserve-3d;
  align-items: center;
  animation: ${rotateCube} 12s cubic-bezier(0.19, 1, 0.22, 1) 1s infinite;
`;

const Title = styled.span`
  font-size: 5vw;
  color: white;
  font-weight: 900;
  position: absolute;

  @media only screen and (max-width: 600px) {
    font-size: 12vw;
  }

  &:nth-child(1) {
    transform: translateZ(50px);
    animation: ${FrontOpacity} 12s cubic-bezier(0.19, 1, 0.22, 1) 1s infinite;
    opacity: 1;
  }
  &:nth-child(2) {
    transform: rotateX(90deg) translateZ(50px);
    animation: ${TopOpacity} 12s cubic-bezier(0.19, 1, 0.22, 1) 1s infinite;
    opacity: 0;
  }
  &:nth-child(3) {
    transform: rotateX(180deg) translateZ(50px);
    animation: ${BottomOpacity} 12s cubic-bezier(0.19, 1, 0.22, 1) 1s infinite;
    opacity: 0;
  }
  &:nth-child(4) {
    transform: rotateX(-90deg) translateZ(50px);
    animation: ${BackOpacity} 12s cubic-bezier(0.19, 1, 0.22, 1) 1s infinite;
    opacity: 0;
  }
`;

const LoginWelcome = () => {
  const welcomeText: string[] = [
    "환영합니다.",
    "미스키 라디오",
    "듣는 타임라인.",
    "냥풋푸~",
  ];

  return (
    <div>
      <Wrapper>
        <Box>
          {welcomeText.map((el, key) => (
            <Title key={key}>{el}</Title>
          ))}
        </Box>
      </Wrapper>
    </div>
  );
};

export default LoginWelcome;
