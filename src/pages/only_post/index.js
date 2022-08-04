import { Tweet, TweetComFoto } from "../../components/Twett";
import PostBox from "../../components/PostBox";
import Main from "../../components/Main";
import {
  Container,
  Body,
  Post,
  Avatar,
  Content,
  Cab,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
  LockIcon,
  Text,
  T,
} from "./styles";
import Link from "next/link";
import { BackIcon, Header } from "../../components/NewPost/styles";

const PostOlny = () => {
  return (
    <Main>
      <Container>
        <Body>
          <Header className="page">
            <Link href={"/home"}>
              <BackIcon />
            </Link>
            <h1>Post</h1>
          </Header>
          <Post>
            <Content>
              <Cab>
                <Avatar />
                <span>
                  @dyvaz <LockIcon />
                </span>
              </Cab>

              <Text>Teste sem foto</Text>
              <T />
              <p>
                <b>18</b> Likes
              </p>
              <T />
              <Icons>
                <Status>
                  <CommentIcon />
                </Status>

                <Status>
                  <RetweetIcon />
                </Status>

                <Status>
                  <LikeIcon />
                </Status>
              </Icons>
              <T />
            </Content>
          </Post>
          <PostBox />
          <Tweet />
          <TweetComFoto />
        </Body>
      </Container>
    </Main>
  );
};

export default PostOlny;
