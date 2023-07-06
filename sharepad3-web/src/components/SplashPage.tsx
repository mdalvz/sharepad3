import { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  background-color: inherit;
`;

const Top = styled.div`
  font-size: 4rem;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  user-select: none;
`;

const Left = styled.div`
  color: inherit;
`;

const Right = styled.div`
  color: #00CBE6;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 20px;
`;

export interface TitleContainerProps {
  children?: ReactNode;
}

export function SplashPage(props: TitleContainerProps) {
  return (
    <Container>
      <Top>
        <Left>
          SharePad
        </Left>
        <Right>
          III
        </Right>
      </Top>
      <Bottom>
        {props.children}
      </Bottom>
    </Container>
  );
}
