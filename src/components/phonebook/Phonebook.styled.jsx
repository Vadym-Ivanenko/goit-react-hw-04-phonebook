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

export const Button = styled.button`
  width: 150px;
  height: 30px;
  margin: 0 auto 30px auto;
  cursor: pointer;

  font-size: 16px;
  font-weight: 400;
  line-height: 0.8;
  color: rgba(255, 255, 255, 1);

  background-color: #0151012e;
  border: 2px solid rgba(255, 255, 255, 1);
  border-radius: 5px;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: -2px -1px 24px 1px rgba(255, 255, 255, 1);
  }
`;
