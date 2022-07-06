import styled from "styled-components";

export const Container = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.outline};
  @media (max-width: 500px) {
    height: 120px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
export const Body = styled.div`
  margin-top: 25px;
  margin-bottom: 45px;
  display: flex;
  position: relative;
`;
export const Text = styled.textarea`
  width: 100%;
  height: 46px;
  padding: 13px 0px 0 65px;
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
