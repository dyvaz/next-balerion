import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
} from "../../components/Search/styles";
import Main from "../../components/Main";

const Search = () => {
  return (
    <Main>
      <Container>
        <SearchWrapper>
          <SearchInput placeholder="Buscar" />
          <SearchIcon />
        </SearchWrapper>
      </Container>
    </Main>
  );
};

export default Search;
