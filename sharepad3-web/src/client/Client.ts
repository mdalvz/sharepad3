import { Client } from 'sharepad3-model';

export function useClient() {
  return new Client('http://localhost:3000');
}
