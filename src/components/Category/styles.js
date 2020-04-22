import styled, { css } from "styled-components";
import { Link as LinkRouter } from "@reach/router";

export const Link = styled(LinkRouter)`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
`;

export const Image = styled.img`
  box-sizing: border-box;
  border: 3px solid #eee;
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  object-fit: cover;
  overflow: hidden;
  border-radius: 50%;
  width: 75px;
  height: 75px;
  margin-bottom: 5px;
  background-color: #ddd;
  ${props =>
    props.loading === "true" &&
    css`
      object-fit: scale-down;
    `}
`;
