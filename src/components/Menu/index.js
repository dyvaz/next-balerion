import React, { useState } from "react";

import {
  Container,
  Topside,
  Logo,
  PostIcon,
  HomeIcon,
  SearchIcon,
  BellIcon,
  ProfileIcon,
  Botside,
  Avatar,
  ProfileData,
  ExitIcon,
} from "./styles";
import { MenuButton } from "../Button/styles";
import ActiveLink from "../ActiveLink";
import NewPost from "../NewPost";

const MenuBar = () => {
  let [showModal, setShowModal] = useState(false);

  return (
    <>
      <Container>
        <Topside>
          <ActiveLink href={"/home"}>
            <Logo />
          </ActiveLink>

          <ActiveLink href={"/home"} activeClassName="active">
            <MenuButton>
              <HomeIcon />
              <span className="name">Página Inicial</span>
            </MenuButton>
          </ActiveLink>

          <ActiveLink href={"/search"} activeClassName="active">
            <MenuButton className="search">
              <SearchIcon />
              <span className="name">Buscar</span>
            </MenuButton>
          </ActiveLink>

          <ActiveLink href={"/notifications"} activeClassName="active">
            <MenuButton>
              <BellIcon />
              <span className="bolinha" data-count=""></span>
              <span className="name">Notificações</span>
            </MenuButton>
          </ActiveLink>

          <ActiveLink href={"/profile"} activeClassName="active">
            <MenuButton>
              <ProfileIcon />
              <span className="name">Perfil</span>
            </MenuButton>
          </ActiveLink>

          <MenuButton onClick={() => setShowModal(true)} className="post">
            <PostIcon />
            <span className="name">Postar</span>
          </MenuButton>
        </Topside>

        <Botside>
          <Avatar />
          <ProfileData>
            <span>@dyvaz</span>
          </ProfileData>
          <ActiveLink href={"/auth/login"}>
            <ExitIcon />
          </ActiveLink>
        </Botside>
      </Container>
      <NewPost onClose={() => setShowModal(false)} show={showModal}></NewPost>
    </>
  );
};

export default MenuBar;
