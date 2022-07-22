import {
  Container,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  ProfileIcon,
  PostIcon,
  Post,
} from "./styles";

import Link from "next/link";
import { MenuButton } from "../Button/styles";
import NewPost from "../NewPost";
import React, { useState } from "react";

const Main = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Container>
        <div>{children}</div>
        <div id="modal-root"></div>
        <BottomMenu>
          <Link href={"/"}>
            <HomeIcon />
          </Link>
          <Link href={"/search"}>
            <SearchIcon />
          </Link>
          <MenuButton className="postbotton" onClick={() => setShowModal(true)}>
            <Post>
              <PostIcon />
            </Post>
          </MenuButton>

          <Link href={"/notifications"}>
            <BellIcon />
          </Link>

          <Link href={"/profile"}>
            <ProfileIcon />
          </Link>
        </BottomMenu>
      </Container>
      <NewPost onClose={() => setShowModal(false)} show={showModal}></NewPost>
    </>
  );
};

export default Main;
