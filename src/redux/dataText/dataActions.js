import { DATA } from './dataTypes';

export const data = (lang = 'en') => {
  return {
    type: DATA,
    preload: lang,
  };
};
