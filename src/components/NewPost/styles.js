import styled from "styled-components";
import { ArrowLeft } from "../../styles/Icons";
//${(props) => props.theme.colors.search}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0 15px;
  max-width: 700px;
  @media (min-width: 800px) {
    background-color: ${(props) => props.theme.colors.twitter_dark_hover};
    color: #000;
    width: 50%;
    height: 30%;
    border-radius: 20px;
  }
`;

export const Header = styled.div`
  align-items: center;
  flex-direction: row;
  position: sticky;
  top: 0;
  z-index: 2;
  display: flex;
  h1 {
    padding-top: 10px;
  }
  a {
    margin-left: -10px;
  }
`;
export const BackIcon = styled(ArrowLeft)`
  margin: 5px;
  width: 26px;
  height: 26px;
  cursor: pointer;
  border-radius: 50%;
  border: 5px solid ${(props) => props.theme.colors.twitter_dark_hover};
  &:hover {
    border: 5px solid ${(props) => props.theme.colors.twitter_light_hover};
    fill: ${(props) => props.theme.colors.twitter};
    background-color: ${(props) => props.theme.colors.twitter_light_hover};
  }
`;

export const ModalBox = styled.div`
  @media (min-width: 800px) {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const Body = styled.div`
  width: 97%;
  height: 165px;
  margin-top: 37px;
  display: flex;
`;

export const Border = styled.div`
  max-width: 650px;
  border-bottom: 1px solid ${(props) => props.theme.colors.outline};
  @media (min-width: 900px) {
    max-width: 600px;
    border-bottom: 1px solid ${(props) => props.theme.colors.outline};
  }

  margin-left: 2%;
`;
export const Text = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 13px 0px 0 70px;
  font-size: 20px;
  outline: none;
  resize: none;
`;
export const Avatar = styled.div`
  margin: 0 10px;
  width: 49px;
  height: 49px;
  border-radius: 50%;
  flex-shrink: 0;
  background: ${(props) => props.theme.colors.gray};
  position: absolute;
`;
