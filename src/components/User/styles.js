import styled from "styled-components";

export const Container = styled.div`
  flex-direction: column;
  width: 100%;
  height: 78px;
  padding-top: 10px;
  padding-left: 15px;
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
