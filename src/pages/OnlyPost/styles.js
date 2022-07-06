import styled, { css } from "styled-components";

import { Favorite } from "../../styles/Icons";
import { Retweet } from "@styled-icons/evil/Retweet";
import { Verified } from "@styled-icons/material-rounded/Verified";
import { Lock } from "@styled-icons/boxicons-solid/Lock";
import { Chat1 } from "@styled-icons/remix-line/Chat1";
// @styled-icons/evil/Retweet

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${(props) => props.theme.colors.outline};
  max-width: 100%;

  height: 100vh;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Post = styled.div`
  display: flex;
  margin: 7px;
  position: relative;
`;

export const Avatar = styled.div`
  width: 49px;
  height: 49px;
  border-radius: 50%;
  flex-shrink: 0;
  background: var(--gray);
  position: absolute;
  top: 0;
  left: 0;
  margin: 2px 0 0 5px;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2px;
  padding-left: 59px;
  position: relative;
`;
export const Cab = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5px;
  white-space: nowrap;
  > span {
    margin-top: 10px;
    font-size: 20px;
    margin-right: 5px;
    color: gray;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const Text = styled.div`
  font-size: 20px;
  margin: 10px;
  text-align: left;
  padding: 20px 0 0 20px;
  margin-left: -60px;
`;

export const Icons = styled.div`
  display: flex;
  align-items: left;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 5px 0 0 0;
  width: 100%; /** Mobile */
  padding: 5px;
  @media (min-width: 330px) {
    width: 90%;
  }
  > div {
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  > svg {
    margin-right: 5px;
  }
  &:nth-child(1) {
    &:hover {
      > svg {
        fill: aqua;
      }
    }
  }
  &:nth-child(2) {
    &:hover {
      > svg {
        fill: ${(props) => props.theme.colors.retweet};
      }
    }
  }
  &:nth-child(3) {
    &:hover {
      color: ${(props) => props.theme.colors.like};
      > svg {
        fill: ${(props) => props.theme.colors.like};
      }
    }
  }
`;

const iconCSS = css`
  width: 30px;
  height: 30px;
  &.notf {
    width: 39px;
    height: 39px;
    text-align: left;
  }
`;

export const CommentIcon = styled(Chat1)`
  ${iconCSS}
`;
export const RetweetIcon = styled(Retweet)`
  ${iconCSS}
`;
export const VerifiedIcon = styled(Verified)`
  ${iconCSS}
  padding-right:5px;
`;
export const LockIcon = styled(Lock)`
  ${iconCSS}
  width: 19px;
  height: 19px;
  padding-right: 5px;
  margin-bottom: 5px;
`;

export const LikeIcon = styled(Favorite)`
  ${iconCSS}
`;
export const T = styled.div`
  margin: 10px;

  text-align: left;
  padding: 0 20px;
  margin-left: -50px;
  max-width: 660px;
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.colors.outline};
  border-bottom: 1px solid ${(props) => props.theme.colors.outline};
  > p {
    font-size: 17px;
    margin: 10px 0;
    text-align: left;
    margin-left: -20px;
  }
`;
