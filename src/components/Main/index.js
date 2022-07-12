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

const Main = ({ children }) => {
  return (
    <Container>
      <div>{children}</div>
      <div id="modal-root"></div>
      <BottomMenu>
        <Link href={"/"}>
          <HomeIcon />
        </Link>

        <SearchIcon />

        <Link href={"/NewPost"}>
          <Post>
            <PostIcon />
          </Post>
        </Link>

        <Link href={"/Notfications"}>
          <BellIcon />
        </Link>

        <Link href={"/Profile"}>
          <ProfileIcon />
        </Link>
      </BottomMenu>
    </Container>
  );
};

export default Main;
