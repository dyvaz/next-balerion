import React from "react";
// import Feed from "../Feed";
// import { Tab } from "../Feed/styles";

import { Container, Banner, Avatar, ProfileData, Followage } from "./styles";

// import { ProfileInfo } from "../Header/styles";
import { LargeButton } from "../Button/styles";
import Header from "../Header";

export const ProfilePage = () => {
  return (
    <Container>
      <Header />
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
    </Container>
  );
};
