import { CHANGE_LANG } from "./changLangTypes";

export const changeLang = (lang = 'en', dir = 'ltr') => {
  return {
    type: CHANGE_LANG,
    preloadLang: lang,
    preloadDir: dir
  };
};
