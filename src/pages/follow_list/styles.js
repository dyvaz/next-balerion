import styled from "styled-components";

export const Tudo = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
export const Section = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Nav = styled.div`
  top: -0.1px;
  background-color: black;
  position: sticky;
  z-index: 3;
`;
export const Top = styled.div`
  top: 0px;
  display: flex;
  border-bottom: 2px solid ${(props) => props.theme.colors.twitter};
`;

export const A = styled.a`
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  padding: 10px;
  color: ${(props) => props.theme.colors.twitter};
  width: 50%;
  text-align: center;
  &:hover {
    background: ${(props) => props.theme.colors.twitter_dark_hover};
    text-decoration: underline 3px;
  }
  &.active {
    background: ${(props) => props.theme.colors.twitter_dark_hover};
    text-decoration: underline 3px;
  }
`;
export const Item = styled.div`
  cursor: pointer;
  display: flex;
`;
export const Button = styled.button`
  height: 40px;
  color: ${(props) => props.theme.colors.twitter};
  border: 1px solid ${(props) => props.theme.colors.twitter};
  border-radius: 25px;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.colors.twitter_dark_hover};
  }
  width: 150px;
  position: sticky;
  padding-left: 5px;
  margin-top: 30px;
  margin-right: 20px;
`;
// ${(props) => props.theme.colors.twitter};
