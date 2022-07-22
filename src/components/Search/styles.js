import styled from "styled-components";

import { Search } from "../../styles/Icons";

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 399px;
  min-height: 960px;
  @media (max-width: 500px) {
    min-height: 898px;
  }
`;

export const SearchWrapper = styled.div`
  padding: 10px 0;
  width: min(399px, 100%);
  //position: fixed;
  //z-index: 2;
  //max-height: 57px;
`;

export const SearchInput = styled.input`
  margin-left: 10px;
  width: 313px;
  height: 50px;
  font-size: 14px;
  padding: 0 10px 0 52px;
  border-radius: 29.5px;
  background: ${(props) => props.theme.colors.search};
  border: 1px solid ${(props) => props.theme.colors.search};
  &::placeholder {
    color: ${(props) => props.theme.colors.gray};
  }
  ~ svg {
    position: relative;
    top: -38px;
    left: 25px;
    z-index: 1;
    transition: 180ms ease-in-out;
  }
  outline: 0;
  &:focus {
    border: 1px solid ${(props) => props.theme.colors.twitter};
    ~ svg {
      fill: ${(props) => props.theme.colors.twitter};
    }
  }
`;

export const SearchIcon = styled(Search)`
  width: 27px;
  height: 27px;
  fill: ${(props) => props.theme.colors.gray};
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 57px 24px 200px;
  margin-top: 3px;
  > div + div {
    margin-top: 15px;
  }
`;
//${(props) => props.theme.colors.gray};
