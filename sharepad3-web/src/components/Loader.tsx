import styled, { keyframes } from 'styled-components';

const Animation = keyframes`
  0% {
    top: 8px;
    height: 64px;
  }
  50%, 100% {
    top: 24px;
    height: 32px;
  }
`;

const Entry = styled.div`
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: #00CBE6;
  animation: ${Animation} 0.6s cubic-bezier(0, 0.5, 0.5, 1) infinite;

  &:nth-child(1) {
    left: 8px;
    animation-delay: -0.24s;
  }
  &:nth-child(2) {
    left: 32px;
    animation-delay: -0.12s;
  }
  &:nth-child(3) {
    left: 56px;
    animation-delay: 0s;
  }
`;

const Container = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
`;

export function Loader() {
  return (
    <Container>
      <Entry/>
      <Entry/>
      <Entry/>
    </Container>
  );
}
