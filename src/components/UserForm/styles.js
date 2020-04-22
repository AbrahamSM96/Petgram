import styled from "styled-components";

export const Form = styled.form`
  padding: 16px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Input = styled.input`
  display: flex;
  justify-content: center;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 12px;
  padding: 8px 4px;
  width: 200px;
  outline: none;
  &[disabled] {
    opacity: 0.1%;
  }
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  padding: 8px 0 15px;
`;

export const Error = styled.span`
  color: red;
  font-size: 14px;
`;
