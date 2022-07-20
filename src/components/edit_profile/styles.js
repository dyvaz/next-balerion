import styled from "styled-components";
//${(props) => props.theme.colors.secondary}
export const Container = styled.div`
  flex-direction: column;
  max-height: 100%;
  min-height: 600px;
  max-width: 100%;
  justify-content: space-around;
  @media (min-width: 1000px) {
    width: 800px;
    align-items: center;
  }
  background: ${(props) => props.theme.colors.primary};
  border-radius: 30px;
`;
export const Text = styled.div`
  padding-botton: 25px;
  margin-top: 30px;
  height: 100px;
  font-size: 20px;
  outline: none;
`;
export const Body = styled.div`
  margin-top: 70px;
  padding-right: 20px;
  padding-left: 20px;
`;
export const Sp = styled.span`
  margin-top: 35px;
  font-size: 15px;
  position: absolute;
  padding: 0px 0 0 10px;
  color: ${(props) => props.theme.colors.twitter_ligth_hover};
  &.birth {
    font-size: 18px;
    margin-top: 5px;
  }
  &.edit {
    margin-top: 3px;
  }
`;
export const Input = styled.input`
  margin-top: 30px;
  font-size: 20px;
  border: 2px solid ${(props) => props.theme.colors.twitter_ligth_hover};
  border-radius: 10px;
  width: 396px;
  padding-left: 10px;
  padding-top: 15px;
  outline: 0;
  height: 55px;
`;
export const Bio = styled.textarea`
  margin-top: 30px;
  font-size: 20px;
  border: 2px solid ${(props) => props.theme.colors.twitter_ligth_hover};
  border-radius: 10px;
  width: 396px;
  padding-left: 10px;
  padding-top: 25px;
  outline: 0;
  height: 75px;
  resize: none;
`;

export const SaveButton = styled.a`
  margin-right: 10px;
  background-color: ${(props) => props.theme.colors.twitter};
  align-items: center;
  flex-shrink: 0;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 0;
  z-index: 2;
  min-width: 90px;
  text-align: center;
  cursor: pointer;
  border-radius: 55px;
  text-decoration: none;
  //float: rigth;
  margin-left: auto;
  margin-top: -40px;
  &:hover {
    > span {
      color: ${(props) => props.theme.colors.twitter};
    }
    background: ${(props) => props.theme.colors.twitter_dark_hover};
  }
`;
