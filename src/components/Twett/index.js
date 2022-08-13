import React from "react";
import Link from "next/link";
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
import Image from "next/image";

export const Tweet = () => {
  return (
    <Link href="/only_post">
      <Container>
        <Body>
          <Avatar>
            <img
              className="image"
              src="https://www.thispersondoesnotexist.com/image"
              alt="foto"
            />
          </Avatar>
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
    </Link>
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
        <Avatar>
          <img
            className="image"
            src="https://www.thispersondoesnotexist.com/image"
            alt="foto"
          />
        </Avatar>
        <Content>
          <Header>
            <span>@user123</span> <VerifiedIcon />
            <Dot />
            <time>1 de jun</time>
          </Header>
          <Description>New post com foto</Description>
          <ImageContent>
            <img
              className="image"
              src="https://www.thispersondoesnotexist.com/image"
              alt="foto"
              height="min(285px, max(175px, 41vw))"
              width="100%"
            />
          </ImageContent>
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
