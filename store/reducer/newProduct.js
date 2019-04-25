import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
  info: {
    strainName: "",
    breeder: "",
    origin: "",
    thc: 0,
    cbd: 0,
    cbn: 0,
    sativa: 0,
    indica: 0,
    ruderalis: 0,
    type: "",
    environment: "",
    yieldInside: 0,
    yieldOutside: 0,
    yieldBoth: 0,
    difficulty: "",
    flowerTime: 0,
    location: "",
    effects: [],
    qtyLoose: 0,
    looseROP: 0,
    qtySold: 0
  },
  variants: [],
  companies: [
    {
      name: "Crop King Seeds",
      abr: "CKS",
      logo: "../../static/img/logos/cks-logo.jpg",
      alias: "",
      sotiId: "",
      sttId: "",
      summary: "",
      description: "",
      packs: [{}]
    },
    {
      name: "Sonoma Seeds",
      abr: "SON",
      logo: "../../static/img/logos/sonoma-logo.jpg",
      alias: "",
      sotiId: "",
      sttId: "",
      summary: "",
      description: "",
      packs: [{}]
    },
    {
      name: "Sunwest Genetics",
      abr: "SWG",
      logo: "../../static/img/logos/sunwest-logo.jpg",
      alias: "",
      sotiId: "",
      sttId: "",
      summary: "",
      description: "",
      packs: [{}]
    },
    {
      name: "Beaver Seeds",
      abr: "BVR",
      logo: "../../static/img/logos/beaver-logo.jpg",
      alias: "",
      sotiId: "",
      sttId: "",
      summary: "",
      description: "",
      packs: []
    },
    {
      name: "Mary Jane's Garden",
      abr: "MJG",
      logo: "../../static/img/logos/mjg-logo.jpg",
      alias: "",
      sotiId: "",
      sttId: "",
      summary: "",
      description: "",
      packs: [{}]
    }
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
    case actionTypes.UPDATE_NEW_PRODUCT:
      return updateObject(state, { info: action.info });
    default:
      return state;
  }
};
