import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
  packs: 1,
  variants: [],
  companies: [
    { name: "Crop King Seeds", abr: "CKS" },
    { name: "Sonoma Seeds", abr: "SON" },
    { name: "Sunwest Genetics", abr: "SWG" },
    { name: "Beaver Seeds", abr: "BVR" },
    { name: "Mary Jane's Garden", abr: "MJG" }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_FORM_TYPE:
      return updateObject(state, { formType: action.formType });
    case actionTypes.TOGGLE_ENV_INPUTS:
      return updateObject(state, { envType: action.envType });
    case actionTypes.ADD_COMPANY_VARIANT:
      return updateObject(state, { variants: action.newVariants });
    default:
      return state;
  }
};
