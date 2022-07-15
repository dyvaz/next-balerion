import styled from "styled-components";
import { Dragon } from "@styled-icons/fa-solid/Dragon";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 500px) {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;
export const Box = styled.div`
  margin-top: 200px;
  width: 550px;
  heigth: 1600px;
  background-color: ${(props) => props.theme.colors.secondary};
  @media (max-width: 500px) {
    margin-top: 0;
    background-color: ${(props) => props.theme.colors.primary};
    width: 100%;
  }
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
