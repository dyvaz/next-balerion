import Main from "../../components/Main";
import { Header } from "../../components/NewPost/styles";
import { RetweetIcon, LikeIcon } from "../../components/Twett/styles";
import {
  Container,
  Avatar,
  Box,
  Title,
  Section,
  Content,
  Icons,
  P,
} from "../../components/Notification/styles";

const Notfications = () => {
  return (
    <Main>
      <Container>
        <Header className="page">
          <h2>Notfications</h2>
        </Header>
        <Section>
          <Avatar />
          <Box>
            {/* toda a box vai ser um botao/link para o post */}
            <Title>
              <span>@tx</span>
              <time>2h</time>
            </Title>
            <Content>
              <Icons>
                <LikeIcon className="like notf" />
              </Icons>
              <P> Liked your Post</P>
            </Content>
          </Box>
        </Section>
        <Section>
          <Avatar />
          <Box>
            <Title>
              <span>@tx</span>
              <time>2h</time>
            </Title>

            <Content>
              <Icons>
                <RetweetIcon className="rt notf" />
              </Icons>
              <P> Repost your Post</P>
              {/* e aqui o que escreveu no Post original */}
            </Content>
          </Box>
        </Section>
        {/* {Avatar nome e @ açao texto(quando comentario) e icones} */}
      </Container>
    </Main>
  );
};

export default Notfications;
