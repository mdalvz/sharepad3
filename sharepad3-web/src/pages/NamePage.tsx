import { useState } from 'react';
import { SplashPage } from '../components/SplashPage';
import { SplashPageForm } from '../components/SplashPageForm';
import { SplashPageFormInput } from '../components/SplashPageFormInput';

export interface NamePageProps {
  onContinue: (userName: string) => void;
}

export function NamePage(props: NamePageProps) {
  const [ userName, setUserName ] = useState<string>('');
  
  return (
    <SplashPage>
      <SplashPageForm header='Name' onContinue={() => props.onContinue(userName)}>
        <SplashPageFormInput
          header='Name'
          value={userName}
          onChange={(value) => setUserName(value)}/>
      </SplashPageForm>
    </SplashPage>
  );
}
