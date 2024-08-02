import React from "react";
import { noteType } from "../../pages/MainPages";
import { Background } from "../../pages/LoginPages";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

const Wrapper = styled(motion.div)`
  display: flex;
  flex-flow: column;
  align-items: center;
  height: 40vh;
`;

const NoteFrame = styled(motion.div)`
  display: flex;
  width: 90vw;
  margin: 5px;
  padding: 5px;
  border: 1px solid lightgray;
  border-radius: 10px;
  background-color: rgba(221, 221, 221, 0.3);
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1), 0 5px 5px rgba(0, 0, 0, 0.1);
`;

const ProfileImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 100%;
`;

const RenoteProfileImg = styled.img`
  position: absolute;
  top: 22px;
  left: 25px;
  width: 25px;
  height: 25px;
  border: 2px solid white;
  border-radius: 100%;
  object-fit: cover;
`;

const NoteText = styled.span`
  padding-left: 10px;
`;

const RenoteText = styled.span`
  padding-left: 10px;
  color: green;
`;

const UserHandle = styled.span`
  padding-left: 10px;
  font-size: small;
  font-weight: bold;
  color: gray;
`;

const RenoteUserHandle = styled.span`
  padding-left: 10px;
  font-size: x-small;
  color: gray;
`;

const NoteComponents = (props: { notes: noteType[] }) => {
  return (
    <div>
      <AnimatePresence>
        <Wrapper transition={{ type: "tween", staggerChildren: 0.1 }}>
          {props.notes.map(
            (el) =>
              el.id !== "" && (
                <NoteFrame
                  key={el.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                >
                  {el.renoteUser ? (
                    <ProfileImgWrapper>
                      <div style={{ display: "flex", position: "relative" }}>
                        <ProfileImg src={el.avatarUrl} alt="Profile Image" />
                        <RenoteProfileImg
                          src={el.renoteUser.avatarUrl}
                          alt="Renoted Profile Image"
                        />
                      </div>
                    </ProfileImgWrapper>
                  ) : (
                    <ProfileImg src={el.avatarUrl} alt="Profile Image" />
                  )}
                  <div>
                    {el.renoteUser ? (
                      <div>
                        <UserHandle>{el.username}</UserHandle>
                        <RenoteUserHandle>
                          {el.renoteUser?.name}
                        </RenoteUserHandle>
                      </div>
                    ) : (
                      <UserHandle>{el.username}</UserHandle>
                    )}
                    <div style={{ display: "flex", flexFlow: "column" }}>
                      <NoteText>{el.text}</NoteText>
                      <RenoteText>{el.renoteUser?.renoteText}</RenoteText>
                    </div>
                  </div>
                </NoteFrame>
              )
          )}
        </Wrapper>
      </AnimatePresence>
      <Background />
    </div>
  );
};

export default NoteComponents;
