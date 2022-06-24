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
import { ProfilePage } from "../Profile";
import Link from "next/link";

const Main = () => {
  return (
    <Container>
      <ProfilePage />
      <BottomMenu>
        <HomeIcon />
        <SearchIcon />
        <Post>
          <PostIcon />
        </Post>
        <BellIcon />
        <ProfileIcon />
      </BottomMenu>
    </Container>
  );
};

export default Main;
