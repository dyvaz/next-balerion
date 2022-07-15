import styled, { css } from "styled-components";
import { Dragon } from "@styled-icons/fa-solid/Dragon";
import { Pencil } from "@styled-icons/octicons/Pencil";

import {
  Home,
  Search,
  Notifications,
  Person,
  ExitToApp,
} from "../../styles/Icons";

export const Container = styled.div`
  display: none;
  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: sticky;
    top: 0;
    left: 0;
    padding: 0 30px 0 30px;
    max-height: 100vh;
    overflow-y: auto;
  }
`;

export const Topside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;

export const Logo = styled(Dragon)`
  cursor: pointer;
  margin-top: 10px;
  width: 41px;
  height: 41px;
  margin-bottom: 20px;
`;

const iconCSS = css`
  flex-shrink: 0;
  width: 50px;
  height: 30px;
`;

export const HomeIcon = styled(Home)`
  ${iconCSS}
`;
export const SearchIcon = styled(Search)`
  ${iconCSS}
`;
export const BellIcon = styled(Notifications)`
  ${iconCSS}
`;

export const ProfileIcon = styled(Person)`
  ${iconCSS}
`;
export const PostIcon = styled(Pencil)`
  ${iconCSS}
`;
export const Botside = styled.div`
  padding: 50px 0;
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 45px;
  height: 45px;
  flex-shrink: 0;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.gray};
  &:hover {
    box-shadow: 0 0 1em gray;
  }
`;

export const ProfileData = styled.div`
  display: none;
  @media (min-width: 1480px) {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    font-size: 14px;
    > span {
      color: ${(props) => props.theme.colors.gray};
    }
  }
`;

export const ExitIcon = styled(ExitToApp)`
  display: none;
  @media (min-width: 1480px) {
    display: inline-block;
    width: 25px;
    height: 25px;
    color: ${(props) => props.theme.colors.white};
    margin-left: 30px;
    cursor: pointer;
    &:hover {
      > path {
        color: ${(props) => props.theme.colors.like};
      }
    }
  }
`;
