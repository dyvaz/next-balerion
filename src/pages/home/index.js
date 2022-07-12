import React from "react";

import { Container } from "./styles";
import PostBox from "../../components/PostBox";
import Main from "../../components/Main";
import Feed from "../../components/Feed";

const HomePage = () => {
  return (
    <Main>
      <Container>
        <PostBox />

        <Feed />
      </Container>
    </Main>
  );
};

export default HomePage;
