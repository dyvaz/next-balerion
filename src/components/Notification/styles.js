import styled from "styled-components";

export const Container = styled.div`
  flex-direction: column;
  width: min(700px, 100%);
  @media (min-width: 500px) {
    //border-left: 1px solid ${(props) => props.theme.colors.outline};
    //border-right: 1px solid ${(props) => props.theme.colors.outline};
    min-height: 965px;
  }
  min-height: 898px;
`;

export const Avatar = styled.div`
  margin: 8px;
  position: absolute;
  > img {
    width: 49px;
    height: 49px;
    border-radius: 50%;
  }
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 65px;
`;
export const Title = styled.div`
  margin-top: 5px;
  display: flex;
  width: 100%;
  cursor: pointer;
  > time {
    padding-left: 8px;
  }
`;
export const Section = styled.section`
  padding-top: 5px;
  max-height: 100%;
  display: flex;
  min-height: 100px;
  border-top: 1px solid ${(props) => props.theme.colors.outline};
`;
export const Content = styled.div`
  font-size: 17px;
  width: 100%;
  height: 50px;
  margin-top: 2px;
`;

export const Icons = styled.div`
  > svg {
    margin-left: 5px;
    color: ${(props) => props.theme.colors.like};
    fill: ${(props) => props.theme.colors.like};
    &.rt {
      margin-left: 5px;
      color: ${(props) => props.theme.colors.retweet};
      fill: ${(props) => props.theme.colors.retweet};
    }
  }
`;
export const P = styled.div`
  font-size: 17px;
  margin-top: -30px;
  margin-left: 50px;
`;
