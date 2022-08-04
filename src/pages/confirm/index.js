import {
  Box,
  Title,
  Container,
  Input,
  Button,
  Link,
  Logo,
} from "../auth/login/styles";

export const ConfirmModal = () => {
  return (
    <Container>
      <Box>
        <Logo />
        <Title>Confirm your email</Title>
        <p>Please confirm your email adress</p>
        {/* adivionar igone de ver a senha */}
        <Button onclick="<Confirm/>">Confirm</Button>
        <p>or</p>
        <Button className="edit">Edit</Button>
        {/* o botao leva para a telade login */}
      </Box>
    </Container>
  );
};

export const Confirm = () => {
  return (
    <Container>
      <Box>
        <Logo />
        <Title>We sent you a code</Title>
        <p>Enter it below to verify email adress</p>
        <Input type="text" placeholder="    Verification code" />
        <Link className="confirm">Didn't receive email?</Link>
        <Button>Next</Button>
      </Box>
    </Container>
  );
};

export const ErrorConfirm = () => {
  return (
    <Container>
      <Box>
        <Logo />
        <Title>Error</Title>
        <p>Oops, somenthing went wrong. Please try again later</p>
        <Button>Ok</Button>
      </Box>
    </Container>
    //leva de volta para pagina de login
  );
};
