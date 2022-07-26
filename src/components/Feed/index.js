import Link from "next/link";
import React from "react";

import { Tweet, TweetComFoto } from "../Twett";

import { Container, Tweets } from "./styles";

const Feed = () => {
  return (
    <Container>
      <Tweets>
        <Tweet />

        <TweetComFoto />
        <TweetComFoto />
        <Tweet />
        <TweetComFoto />
      </Tweets>
    </Container>
  );
};

export default Feed;
