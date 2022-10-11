import { DATA } from "./dataTypes";
import enData from "../../assets/translations/en.json";
import ArData from "../../assets/translations/ar.json";

const initialState = {
  dataJson: enData,
};
const dataReducer = (state = initialState, action) => {
  const dataText =
    action.preload === "en"
      ? enData
      : action.preload === "ar"
      ? ArData
      : enData;
  switch (action.type) {
    case DATA:
      return {
        ...state,
        dataJson: dataText,
      };
    default:
      return state;
  }
};

export default dataReducer;
