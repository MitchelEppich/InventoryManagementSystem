import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
  strainName: null,
  variants: [],
  companies: [
    { name: "Crop King Seeds", abr: "CKS", alias: null, packs: [{}] },
    { name: "Sonoma Seeds", abr: "SON", packs: [{}] },
    { name: "Sunwest Genetics", abr: "SWG", packs: [{}] },
    { name: "Beaver Seeds", abr: "BVR", packs: [] },
    { name: "Mary Jane's Garden", abr: "MJG", packs: [{}] }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_FORM_TYPE:
      return updateObject(state, { formType: action.formType });
    case actionTypes.TOGGLE_ENV_INPUTS:
      return updateObject(state, { envType: action.envType });
    case actionTypes.TOGGLE_COMPANY_VARIANT:
      return updateObject(state, { variants: action.newVariants });
    case actionTypes.TOGGLE_PACK_INPUT:
      return updateObject(state, { companies: action.newCompanies });
    default:
      return state;
  }
};
