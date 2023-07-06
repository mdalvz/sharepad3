import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Header = styled.div`
  color: inherit;
  font-size: 1rem;
  user-select: none;
`;

const Input = styled.input`
  color: black;
  background-color: white;
  padding: 5px;
  border-radius: 5px;
  border: none;
`;

export interface SplashPageFormInputProps {
  header: string;
  value: string;
  onChange: (value: string) => void;
}

export function SplashPageFormInput(props: SplashPageFormInputProps) {
  return (
    <Container>
      <Header>
        {props.header}
      </Header>
      <Input
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}/>
    </Container>
  );
}
