import { CHANGE_DATA } from './dataTypes';

export const changeData = (lang = 'en') => {
  return {
    type: CHANGE_DATA,
    preload: lang,
  };
};
