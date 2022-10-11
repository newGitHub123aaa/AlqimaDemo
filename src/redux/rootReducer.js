import { combineReducers } from "redux";
import changLangReducer from "./changLang/changLangReducer";
import dataReducer from './dataText/dataReducer';

const rootReducer = combineReducers({
  langDir: changLangReducer,
  dataText: dataReducer,
});

export default rootReducer;
