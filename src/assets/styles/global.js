import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Sora', sans-serif;
  }

  body {
    background: ${({ theme }) => theme.colors.backgroundColor};
    font-size: 16px;
    color: ${({theme}) => theme.colors.gray[900]};
  }

  button {
    cursor: pointer;
  }
`;
