import styled from 'styled-components';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SplashPage } from '../components/SplashPage';
import { SplashPageForm } from '../components/SplashPageForm';
import { SplashPageFormInput } from '../components/SplashPageFormInput';
import { Button } from '../components/Button';
import { NameContext } from '../contexts/NameContext';
import { LoaderPage } from './LoaderPage';
import { useClient } from '../client/Client';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Name = styled.div`
  color: inherit;
  font-size: 2rem;
  font-style: italic;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 20px;
`;

export function HomePage() {
  const client = useClient();
  const navigate = useNavigate();
  const nameContext = useContext(NameContext)!;
  const [ loading, setLoading ] = useState<boolean>(false);
  const [ sessionId, setSessionId ] = useState<string>('');

  function onChange() {
    nameContext.resetUserName()
  }

  function onCreate() {
    setLoading(true);
    client.create({}).then((response) => {
      setLoading(false);
      navigate(`/${response.sessionId}`);
    }).catch((error) => {
      setLoading(false);
      if (error instanceof Error) {
        alert(`Create failed: ${error.message}`);
      }
    });
  }

  function onConnect() {
    navigate(`/${sessionId}`);
  }

  if (loading) {
    return (
      <LoaderPage/>
    );
  }

  return (
    <SplashPage>
      <Container>
        <Top>
          <Name>
            {nameContext.userName}
          </Name>
          <Button onClick={() => onChange()}>
            Change
          </Button>
        </Top>
        <Bottom>
          <SplashPageForm header='Create' onContinue={() => onCreate()}>
          </SplashPageForm>
          <SplashPageForm header='Connect' onContinue={() => onConnect()}>
            <SplashPageFormInput
              header='Session ID'
              value={sessionId}
              onChange={(value) => setSessionId(value)}/>
          </SplashPageForm>
        </Bottom>
      </Container>
    </SplashPage>
  );
}
