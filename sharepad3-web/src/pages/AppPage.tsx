import styled from 'styled-components';
import { NameContextProvider } from '../contexts/NameContextProvider';
import { HomePage } from './HomePage';
import { SessionPage } from './SessionPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { COLOR_BG_1 } from '../colors/Colors';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${COLOR_BG_1};
`;

export function AppPage() {
  return (
    <Container>
      <NameContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/:sessionId' element={<SessionPage/>}/>
          </Routes>
        </BrowserRouter>
      </NameContextProvider>
    </Container>
  );
}
