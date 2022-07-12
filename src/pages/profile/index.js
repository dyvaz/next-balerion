import React from "react";

// import Feed from "../Feed";
// import { Tab } from "../Feed/styles";
// import Header from "../Header";
// import { ProfileInfo } from "../Header/styles";

import { LargeButton } from "../../components/Button/styles";
import Main from "../../components/Main";
import Feed from "../../components/Feed";
import { Tab } from "../../components/Feed/styles";
import { Container, Banner, Avatar, ProfileData, Followage } from "./styles";

const Profile = () => {
  return (
    <Main>
      <Container>
        <Banner>
          <Avatar />
        </Banner>

        <ProfileData>
          <LargeButton className="edit">Editar perfil</LargeButton>

          <h1>Dyanna</h1>
          <h2>@dyvaz</h2>
          <Followage>
            <span>
              <strong>999</strong> seguindo
            </span>

            <span>
              <strong>999 </strong> seguidores
            </span>
          </Followage>
        </ProfileData>
        <Tab>Posts</Tab>
        <Feed />
      </Container>
    </Main>
  );
};
export default Profile;
