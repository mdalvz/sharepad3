import styled from 'styled-components';
import { COLOR_FG_1 } from '../colors/Colors';

export const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  color: inherit;
  background-color: ${COLOR_FG_1};
  &:hover {
    cursor: pointer;
    filter: brightness(80%);
  }
`;
