import styled from "styled-components";

export const Button = styled.button`
  background: #00ed80;
  border-radius: 20px;
  color: #fff;
  height: 32px;
  display: block;
  width: 40%;
  text-align: center;
  &[disabled] {
    opacity: 0.3;
  }
`;
