import React from "react";

import {
  Container,
  Body,
  Retweeted,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
  VerifiedIcon,
  LockIcon,
} from "./styles";

export const Tweet = () => {
  return (
    <Container>
      <Body>
        <Avatar />
        <Content>
          <Header>
            <span>@dyvaz</span> <LockIcon />
            <Dot />
            <time>1 de jun</time>
          </Header>

          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <Description>Teste sem foto</Description>

          <Icons>
            <Status className="post">
              <CommentIcon />1
            </Status>

            <RetweetIcon />

            <Status className="post">
              <LikeIcon />
              999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};
export const TweetComFoto = () => {
  return (
    <Container>
      <Retweeted>
        <RetweetIcon />
        Você retweetou
      </Retweeted>
      <Body>
        <Avatar />
        <Content>
          <Header>
            <span>@user123</span> <VerifiedIcon />
            <Dot />
            <time>1 de jun</time>
          </Header>

          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <Description>New post com foto</Description>

          <ImageContent />

          <Icons>
            <Status className="post">
              <CommentIcon />
              18
            </Status>
            <Status className="post">
              <RetweetIcon />
              18
            </Status>
            <Status className="post">
              <LikeIcon />
              999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};
