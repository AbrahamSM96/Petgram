import styled from "styled-components";
import { Link as LinkRouter } from "@reach/router";
import { fadeIn } from "../../styles/animation";
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  background: #fcfcfc;
  border-top: 1px solide #e0e0e0;
  bottom: 0;
  height: 50px;
  left: 0;
  margin: 0 auto;
  max-width: 500px;
  right: 0;
  width: 100%;
  z-index: 1000;
`;

export const Link = styled(LinkRouter)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 100%;
  height: 100%;
  color: #888;

  &[aria-current] {
    color: #000;

    &:after {
      ${fadeIn({ time: "0.5s" })}
      content: '.';
      position: absolute;
      bottom: 0;
      font-size: 34px;
      line-height: 32px;
    }
  }
`;
