import {
  Box,
  Title,
  Container,
  Input,
  Button,
  Logo,
  Exit,
} from "../Login/styles";

const RecuperarSenha = () => {
  return (
    <Container>
      <Button className="exit">X</Button>
      <Box>
        <Logo />
        <Title>Find your Twitter account</Title>
        <Input type="text" placeholder="  Email or username" />
        <Button>Search</Button>
      </Box>
    </Container>
  );
};

export default RecuperarSenha;
