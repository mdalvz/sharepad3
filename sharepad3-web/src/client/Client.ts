import { Client } from 'sharepad3-model';

export function useClient() {
  return new Client('https://api.sharepad.mdalvz.dev');
}
