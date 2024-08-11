import React from "react";
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
  height: 20vh;
  @media only screen and (max-width: 600px) {
    width: 80vw;
    height: 4vh;
    margin-bottom: 30px;
  }
`;

const Box = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  flex-flow: column;
  transform-style: preserve-3d;
  justify-content: center;
  animation: ${rotateCube} 12s cubic-bezier(0.19, 1, 0.22, 1) 1s infinite;
`;

const Title = styled.span`
  font-size: 120px;
  color: white;
  font-weight: 900;
  position: absolute;
  @media only screen and (max-width: 600px) {
    font-size: 50px;
  }

  &:nth-child(1) {
    transform: translateZ(70px);
    animation: ${FrontOpacity} 12s cubic-bezier(0.19, 1, 0.22, 1) 1s infinite;
    opacity: 1;
    @media only screen and (max-width: 600px) {
      transform: translateZ(30px);
    }
  }
  &:nth-child(2) {
    transform: rotateX(90deg) translateZ(70px);
    animation: ${TopOpacity} 12s cubic-bezier(0.19, 1, 0.22, 1) 1s infinite;
    opacity: 0;
    @media only screen and (max-width: 600px) {
      transform: rotateX(90deg) translateZ(30px);
    }
  }
  &:nth-child(3) {
    transform: rotateX(180deg) translateZ(70px);
    animation: ${BottomOpacity} 12s cubic-bezier(0.19, 1, 0.22, 1) 1s infinite;
    opacity: 0;
    @media only screen and (max-width: 600px) {
      transform: rotateX(180deg) translateZ(30px);
    }
  }
  &:nth-child(4) {
    transform: rotateX(-90deg) translateZ(70px);
    animation: ${BackOpacity} 12s cubic-bezier(0.19, 1, 0.22, 1) 1s infinite;
    opacity: 0;
    @media only screen and (max-width: 600px) {
      transform: rotateX(-90deg) translateZ(30px);
    }
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
