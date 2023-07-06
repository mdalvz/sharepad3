import { ReactNode } from 'react';
import styled from 'styled-components';
import { Button } from './Button';

const Container = styled.div`
  width: 200px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #303030;
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
