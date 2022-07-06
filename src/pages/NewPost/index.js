import { Container, Body, Avatar, Text, Border, ModalBox, He } from "./styles";
import { LargeButton } from "../../components/Button/styles";

const NewPost = () => {
  return (
    <ModalBox>
      <Container>
        <He>
          <button></button>

          <h1>Home</h1>
        </He>
        <LargeButton className="post">
          <span>Postar</span>
        </LargeButton>
        <Body>
          <Avatar />
          <Text placeholder="O que esta acontecendo?" maxLength="140" />
        </Body>
        <Border />
        {/*botoes de imagem/sticker? */}
      </Container>
    </ModalBox>
  );
};
export default NewPost;
