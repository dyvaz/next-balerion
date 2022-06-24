import { Container, SearchWrapper, SearchInput, SearchIcon } from "./styles";

const SideBar = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar" />
        <SearchIcon />
      </SearchWrapper>
    </Container>
  );
};

export default SideBar;
