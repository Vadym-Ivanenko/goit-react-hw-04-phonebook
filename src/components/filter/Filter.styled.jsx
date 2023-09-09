import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: 400;
  line-height: 1;
  color: rgba(255, 255, 255, 1);
`;

export const Input = styled.input`
  margin-bottom: 10px;
  border-radius: 3px;
  height: 22px;
  padding: 0 10px;
  border: none;

  font-size: 16px;
  font-weight: 400;
  line-height: 0.8;
`;
