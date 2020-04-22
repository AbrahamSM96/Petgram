import styled, { css } from "styled-components";
import { fadeIn } from "../../styles/animation";

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding-top: 1px;
  width: 100%;
  padding: 10px 10px 10px 17px;
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  & svg {
    margin-right: 4px;
    color: #d1d1d1;
    width: 23px;
    ${props =>
      props.liked &&
      css`
        ${fadeIn()}
        color: red;
      `}
  }
`;
