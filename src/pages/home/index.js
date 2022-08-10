import React from "react";

import { Container } from "../../components/Home/styles";
import PostBox from "../../components/PostBox";
import Main from "../../components/Main";
import Feed from "../../components/Feed";
import { Header } from "../../components/NewPost/styles";

const HomePage = () => {
  return (
    <Main>
      <Container>
        <Header className="page">
          <h2>Home</h2>
        </Header>
        <PostBox />

        <Feed />
      </Container>
    </Main>
  );
};

export default HomePage;
