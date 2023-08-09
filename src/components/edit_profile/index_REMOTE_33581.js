import React from "react";
import { Banner, Avatar } from "../Profile/styles";
import { ProfileInfo } from "../Main/styles";
import { Container, Text, Body, Sp, Input, Bio, SaveButton } from "./styles";
import { ModalBox, BackIcon, Header } from "../NewPost/styles";
import ReactDOM from "react-dom";

const EditProfile = ({ show, onClose }) => {
  const handleCloseClick = (e) => {
    e.preventDefault();
    e.stopPropagation;
    onClose();
  };
  const modalContent = show ? (
    <ModalBox>
      <Container>
        <ProfileInfo>
          <Header>
            <a href="#" onClick={handleCloseClick}>
              <BackIcon />
            </a>
            <strong>Edit profile</strong>
          </Header>
          <SaveButton href="#" onClick={handleCloseClick} className="profile">
            <span>save</span>
          </SaveButton>
        </ProfileInfo>
        <Banner>
          <Avatar>
            <img
              className="image"
              src="https://www.thispersondoesnotexist.com
              "
              alt="foto"
            />
          </Avatar>
        </Banner>
        <Body>
          <Text maxLength="50">
            <Sp>Username</Sp>
            <Input className="name" />
          </Text>
          <Text maxLength="160">
            <Sp>Bio</Sp>
            <Bio />
          </Text>
        </Body>
      </Container>
    </ModalBox>
  ) : null;
  if (show) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};
export default EditProfile;
