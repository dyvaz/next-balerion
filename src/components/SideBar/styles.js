import styled from "styled-components";

export const Container = styled.div`
  display: none;
  @media (min-width: 1067px) {
    display: flex;
    flex-direction: column;
    width: min(399px, 100%);
  }
`;
