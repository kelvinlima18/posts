import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100%;
  max-width: 360px;
  margin: auto;
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;

  img {
    width: 100%;
  }

  form {
    margin: 40px 0;
    text-align: center;

    h2 {
      font-weight: bold;
      font-size: 24px;
      margin-bottom: 12px;
      color: #1a2027;
    }

    a {
      display: block;
      text-decoration: none;
      font-size: 14px;
      color: #999;
      transition: color 0.9s;

      &:hover {
        color: ${darken(0.09, '#999')};
      }
    }
  }

  > a {
    display: block;
    text-decoration: none;
    font-size: 14px;
    color: #cf3828;
    font-weight: bold;
    transition: color 0.9s;

    &:hover {
      color: ${darken(0.09, '#cf3828')};
    }
  }
`;
