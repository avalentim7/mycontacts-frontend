import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
`;

export const InputSearchContainer = styled.div`
  width: 100%;

  input {
    width: 100%;
    background: #fff;
    border: none;
    border-radius: 25px;
    height: 54px;
    box-shadow: 8px 4px 10px rgba(0, 0, 0, 0.04);
    outline: 0;
    padding: 0 16px;

    &::placeholder {
      color: ${({theme}) => theme.colors.gray[200]};
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;

  strong {
    font-size: 24px;
  }

  a {
    font-weight: bold;
    padding: 8px 16px;
    color: ${({theme}) => theme.colors.primary.main};
    text-decoration: none;
    border: 2px solid ${({theme}) => theme.colors.primary.main};
    border-radius: 4px;
    transition: all 0.2s ease-in;

    &:hover {
      background: ${({theme}) => theme.colors.primary.main};
      color: #fff;
    }
  }
`;

export const ListContainer = styled.div`
  margin-top: 24px;

  header {
    margin-bottom: 8px;

    button {
      display: flex;
      background: transparent;
      border: none;
      align-items: center;

      span {
        margin-right: 8px;
        font-weight: bold;
        color: ${({theme}) => theme.colors.primary.main};
      }
    }
  }
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 16px;
  }

  .info {
    .contact-name {
      display: flex;
      align-items: center;

      small {
        color: ${({theme}) => theme.colors.primary.main};
        background: ${({theme}) => theme.colors.primary.lighter};
        font-weight: bold;
        padding: 4px;
        text-transform: uppercase;
        border-radius: 4px;
        margin-left: 8px;
      }
    }

    span {
      display: block;
      font-size: 14px;
      color: #ccc;
    }
  }

  .actions {
    display: flex;
    align-items: center;

    button {
      background: none;
      border: none;
      margin-left: 8px;
    }
  }
`;
