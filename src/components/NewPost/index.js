import {
  Container,
  Body,
  Avatar,
  Text,
  Border,
  ModalBox,
  Header,
  BackIcon,
} from "./styles";
import { LargeButton } from "../Button/styles";
import ReactDOM from "react-dom";
const NewPost = ({ show, onClose }) => {
  const handleCloseClick = (e) => {
    e.preventDefault();
    e.stopPropagation;
    onClose();
  };

  const modalContent = show ? (
    <ModalBox>
      <Container>
        <Header>
          <a href="#" onClick={handleCloseClick}>
            <BackIcon />
          </a>
          <h1>Home</h1>
        </Header>
        <LargeButton className="post">
          <span>Postar</span>
        </LargeButton>
        <Body>
          <Avatar>
            <img
              className="image"
              src="https://www.thispersondoesnotexist.com/image"
              alt="foto"
            />
          </Avatar>
          <Text placeholder="O que esta acontecendo?" maxLength="140" />
        </Body>
        <Border />
      </Container>
    </ModalBox>
  ) : null;
  if (show) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};
export default NewPost;
