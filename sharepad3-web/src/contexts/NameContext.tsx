import { createContext } from 'react';

export interface NameContextData {
  userName: string;
  resetUserName: () => void;
}

export const NameContext = createContext<NameContextData | undefined>(undefined);
