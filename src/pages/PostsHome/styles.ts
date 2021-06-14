import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 12px 0;
  background: #1a2027;
`;

export const HeaderContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  img {
    height: 44px;
  }

  .username {
    margin: 0 10px 0 auto;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
  }

  button {
    margin-left: auto;
    background: transparent;
    border: 0;

    svg {
      color: #cf3828;
      width: 16px;
      height: 16px;
    }
  }
`;

export const Content = styled.main`
  max-width: 1000px;
  margin: 44px auto;
  display: flex;
  flex-direction: column;
`;

export const InputPost = styled(Form)`
  input {
    padding: 36px;
    border: 2px solid #ddd;
    border-radius: 10px;
    width: 100%;
    background: #fff;
  }

  button {
    height: 36px;
    border: 0;
    border-radius: 7px;
    background: #cf3828;
    width: 100%;
    color: #fff;
    margin-top: 8px;
    font-weight: bold;
    font-size: 14px;
  }
`;

export const PostCard = styled.div`
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  border: 2px solid #fff;
  border-radius: 10px;
  background: #fff;
`;

export const Post = styled.div`
  width: 100%;
  padding: 16px;

  span {
    font-size: 16px;
    font-weight: bold;
  }

  p {
    font-size: 14px;
    color: #999;
    margin-top: 5px;
  }
`;

export const PostReaction = styled.div`
  display: flex;

  button {
    background: transparent;
    width: 500px;
    border: 0;
    border-top: 2px solid #ddd;
    padding: 8px;
    color: #999;

    svg {
      width: 22px;
      height: 22px;
      border: 0;
      color: #999;
    }

    &:hover {
      color: #1a2027;
      svg {
        color: #1a2027;
      }
    }
  }
`;
