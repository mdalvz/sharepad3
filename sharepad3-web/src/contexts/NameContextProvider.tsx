import { useState, ReactNode } from 'react';
import { NameContext } from './NameContext';
import { NamePage } from '../pages/NamePage';

const NAME_KEY = 'userName';

function getNameFromLocalStorage(): string | undefined {
  let result = localStorage.getItem(NAME_KEY);
  return result ? result : undefined;
}

function putNameToLocalStorage(userName: string) {
  localStorage.setItem(NAME_KEY, userName);
}

export interface NameContextProviderProps {
  children?: ReactNode;
}

export function NameContextProvider(props: NameContextProviderProps) {
  const [userName, setUserName] = useState<string | undefined>(getNameFromLocalStorage());

  if (!userName) {
    return (
      <NamePage onContinue={(value) => {
        putNameToLocalStorage(value);
        setUserName(value);
      }}/>
    );
  }

  let data = {
    userName,
    resetUserName: () => {
      setUserName(undefined);
    },
  }

  return (
    <NameContext.Provider value={data}>
      {props.children}
    </NameContext.Provider>
  );
}
