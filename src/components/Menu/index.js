import Router from "next/router";

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

const MenuBar = () => {
  return (
    <Container>
      <Topside>
        <ActiveLink href={"/"}>
          <Logo />
        </ActiveLink>
        <ActiveLink href={"/"} activeClassName="active">
          <MenuButton>
            <HomeIcon />
            <span className="name">Página Inicial</span>
          </MenuButton>
        </ActiveLink>

        <ActiveLink href={"/SideBar"} activeClassName="active">
          <MenuButton className="search">
            <SearchIcon />
            <span className="name">Buscar</span>
          </MenuButton>
        </ActiveLink>
        <ActiveLink href={"/Notfications"} activeClassName="active">
          <MenuButton>
            <BellIcon />
            <span className="bolinha" data-count=""></span>
            <span className="name">Notificações</span>
          </MenuButton>
        </ActiveLink>

        <ActiveLink href={"/Profile"} activeClassName="active">
          <MenuButton>
            <ProfileIcon />
            <span className="name">Perfil</span>
          </MenuButton>
        </ActiveLink>

        <ActiveLink href={"/NewPost"} activeClassName="active">
          <MenuButton className="post">
            <PostIcon />
            <span className="name">Postar</span>
          </MenuButton>
        </ActiveLink>
      </Topside>

      <Botside>
        <Avatar />
        <ProfileData>
          <span>@dyvaz</span>
        </ProfileData>
        <ActiveLink href={"/Login"}>
          <ExitIcon />
        </ActiveLink>
      </Botside>
    </Container>
  );
};

export default MenuBar;
