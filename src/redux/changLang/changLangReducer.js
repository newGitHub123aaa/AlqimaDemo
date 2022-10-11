import { CHANGE_LANG } from './changLangTypes';

const initialState = {
  lang: 'en',
  dir: 'ltr'
};
const changLangReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANG:
      return {
        ...state,
        lang: action.preloadLang,
        dir: action.preloadDir,
      };
    default:
      return state;
  }
};

export default changLangReducer;
