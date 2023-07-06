import { ReactNode } from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { COLOR_BG_2 } from '../colors/Colors';

const Container = styled.div`
  width: 200px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${COLOR_BG_2};
`;

const Header = styled.div`
  font-size: 2rem;
  color: inherit;
  text-align: center;
  user-select: none;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export interface SplashPageFormProps {
  children?: ReactNode;
  header: string;
  onContinue: () => void;
}

export function SplashPageForm(props: SplashPageFormProps) {
  return (
    <Container>
      <Header>
        {props.header}
      </Header>
      <Content>
        {props.children}
      </Content>
      <Button onClick={() => props.onContinue()}>
        Continue
      </Button>
    </Container>
  );
}
