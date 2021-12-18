import styled from 'styled-components';

export default styled.input`
  width: 100%;
  border: none;
  outline: none;
  height: 54px;
  font-size: 16px;
  background: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  border: 2px solid #fff;
  padding: 0 16px;
  transition: border-color 0.2s ease-in;

  &:focus {
    border-color: ${({theme}) => theme.colors.primary.main};
  }
`;
