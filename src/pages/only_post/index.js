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
} from "../../components/OnlyPost/styles";
import { BackIcon, Header } from "../../components/NewPost/styles";
import { useRouter } from "next/router";

const PostOlny = () => {
  const router = useRouter();
  return (
    <Main>
      <Container>
        <Body>
          <Header className="page">
            <BackIcon onClick={() => router.back()} />

            <h1>Post</h1>
          </Header>
          <Post>
            <Content>
              <Cab>
                <Avatar>
                  <img
                    className="image"
                    src="https://www.thispersondoesnotexist.com/image"
                    alt="foto"
                  />
                </Avatar>
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
