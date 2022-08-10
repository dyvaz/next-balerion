import styled from "styled-components";
import { Dragon } from "@styled-icons/fa-solid/Dragon";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 500px) {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;
export const Box = styled.div`
  margin-top: 200px;
  width: 550px;
  heigth: 1600px;
  background-color: ${(props) => props.theme.colors.secondary};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 25px;
`;

export const Logo = styled(Dragon)`
  width: 41px;
  height: 41px;
  margin: 20px;
`;

export const Title = styled.div`
  color: white;
  margin: 20px;
`;

export const Input = styled.input`
  margin-top: 12px;
  min-width: 60%;
  height: min(40px, max(75px, 41vw));
  cursor: pointer;
  flex-wrap: wrap;
  display: flex;
  padding: 10px 10px 10px 25px;
  border: 1px solid ${(props) => props.theme.colors.twitter};
  border-radius: 29.5px;
  margin: 10px 0;
  background-color: ${(props) => props.theme.colors.twitter};
  outline: 0;
  &:focus {
    border: 1px solid ${(props) => props.theme.colors.twitter_light_hover};
  }
`;

export const Button = styled.button`
  width: 260px;
  height: 50px;
  border: none;
  border-radius: 29.5px;
  color: #fff;
  margin: 20px 30px;
  font-weight: bold;
  background-color: ${(props) => props.theme.colors.twitter_dark_hover};
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.colors.twitter_light_hover};
  }
  &.exit {
    margin: 5px;
    font-size: 14px;
    position: sticky;
    width: 40px;
    height: 40px;
    background-color: ${(props) => props.theme.colors.twitter};
    &:hover {
      background: ${(props) => props.theme.colors.twitter_light_hover};
    }
  }
  &.edit {
    margin-top: 20px;
  }
`;
export const A = styled.div`
  padding: 0 0 15px 0;
  display: inline-block;
  flex-direction: row;
  color: ${(props) => props.theme.colors.twitter_dark_hover};
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.twitter_light_hover};
  }
  &.confirm {
    font-size: 15px;
    padding: 0;
  }
`;
export const Exit = styled.div`
  margin-top: -75px;
  margin-left: -90%;
  z-index: 40;
  @media (max-width: 500px) {
    z-index: 40;
  }
  width: 50px;
  height: 50px;
`;
