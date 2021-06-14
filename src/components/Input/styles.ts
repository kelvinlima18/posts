import styled, { css } from 'styled-components';

interface ContainerProps {
  isErrored: boolean;
}

export const Container = styled.input<ContainerProps>`
  background: #e6e6e6;
  width: 100%;
  border: 2px solid #e6e6e6;
  border-radius: 10px;
  padding: 16px;
  margin: 5px 0 5px 0;
  font-size: 14px;

  ${props =>
    props.isErrored &&
    css`
      border: 3px solid #cf3828;
    `}
`;
