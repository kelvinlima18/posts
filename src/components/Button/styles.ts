import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.button`
  border: 0;
  height: 50px;
  border-radius: 10px;
  margin: 12px 0;
  background: #1a2027;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  width: 100%;
  transition: background 0.9s;

  &:hover {
    background: ${lighten(0.09, '#1A2027')};
  }
`;
