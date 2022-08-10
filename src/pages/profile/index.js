import { LargeButton } from "../../components/Button/styles";
import Main from "../../components/Main";
import Feed from "../../components/Feed";
import { Tab } from "../../components/Feed/styles";
import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  Followage,
  followList,
} from "../../components/Profile/styles";
import EditProfile from "../../components/edit_profile";
import React, { useState } from "react";
import Link from "next/link";
const Profile = () => {
  let [showModal, setShowModal] = useState(false);

  return (
    <Main>
      <Container>
        <Banner>
          <Avatar />
        </Banner>

        <ProfileData>
          <LargeButton onClick={() => setShowModal(true)} className="edit">
            Editar perfil
          </LargeButton>

          <h1>@dyvaz</h1>

          <Followage>
            <span>
              <Link href={"/follow_list/following"}>
                <p>
                  <strong>999</strong> seguindo
                </p>
              </Link>
            </span>

            <span>
              <Link href={"/follow_list/followers"}>
                <p>
                  <strong>999</strong> seguidores
                </p>
              </Link>
            </span>
          </Followage>
        </ProfileData>
        <Tab>Posts</Tab>
        <Feed />
      </Container>
      <EditProfile
        onClose={() => setShowModal(false)}
        show={showModal}
      ></EditProfile>
    </Main>
  );
};
export default Profile;
