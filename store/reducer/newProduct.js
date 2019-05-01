import actionTypes from "../actions";
import { updateObject } from "../utility";
let initialInfo = {
  name: "",
  category: 0,
  breeder: "",
  origin: [],
  thc: [0],
  cbd: [0],
  cbn: [0],
  sativa: 0,
  indica: 0,
  ruderalis: 0,
  genetic: 0,
  environment: -1,
  yield: [],
  difficulty: 0,
  flowerTime: [0],
  location: [
    {
      distributor: "5cc74ef13ec3eb9a6da5820d",
      aisle: "",
      section: "",
      color: ""
    }
  ],
  effect: [],
  stock: [
    {
      amount: 0,
      rop: 0,
      noe: 0
    }
  ]
};
let initialCompanies = [
  {
    company: { name: "crop king seeds" },
    alias: "",
    sotiId: "",
    sttId: 0,
    _id: "5cc1f75d0955774cbc422e8e",
    summary: "",
    description: [],
    attributes: [
      {
        price: 0,
        size: 0,
        stock: [{ amount: 0, rop: 0, noe: 0 }]
      }
    ]
  },
  {
    company: { name: "sonoma seeds" },
    alias: "",
    sotiId: "",
    sttId: 0,
    // _id: "",
    _id: "5cc770893ec3eb9a6db06d4b",
    summary: "",
    description: [],
    attributes: [
      {
        price: 0,
        size: 0,
        stock: [{ amount: 0, rop: 0, noe: 0 }]
      }
    ]
  },
  {
    company: { name: "sunwest genetics" },
    alias: "",
    sotiId: "",
    sttId: 0,
    _id: "5cc771403ec3eb9a6db0be7e",
    summary: "",
    description: [],
    attributes: [
      {
        price: 0,
        size: 0,
        stock: [{ amount: 0, rop: 0, noe: 0 }]
      }
    ]
  },
  {
    company: { name: "beaver seeds" },
    alias: "",
    sotiId: "",
    sttId: 0,
    _id: "5cc76df43ec3eb9a6dafa9ac",
    summary: "",
    description: [],
    attributes: [
      {
        price: 0,
        size: 0,
        stock: [{ amount: 0, rop: 0, noe: 0 }]
      }
    ]
  },
  {
    company: { name: "mary janes garden" },
    alias: "",
    sotiId: "",
    sttId: 0,
    _id: "5cc772bd3ec3eb9a6db1295d",
    summary: "",
    description: [],
    attributes: [
      {
        price: 0,
        size: 0,
        stock: [{ amount: 0, rop: 0, noe: 0 }]
      }
    ]
  },
  {
    company: { name: "mj seeds canada" },
    alias: "",
    sotiId: "",
    sttId: 0,
    _id: "5cc76f1c3ec3eb9a6db001cc",
    summary: "",
    description: [],
    attributes: [
      {
        price: 0,
        size: 0,
        stock: [{ amount: 0, rop: 0, noe: 0 }]
      }
    ]
  }
];

const initialState = {
  info: initialInfo,
  variants: [],
  companies: initialCompanies,
  distro: 0,
  editMode: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_FORM_TYPE:
      return updateObject(state, {
        formType: action.formType,
        category: action.category
      });
    case actionTypes.TOGGLE_ENV_INPUTS:
      return updateObject(state, { envType: action.envType });
    case actionTypes.TOGGLE_COMPANY_VARIANT:
      return updateObject(state, { variants: action.newVariants });
    case actionTypes.TOGGLE_PACK_INPUT:
      return updateObject(state, { companies: action.newCompanies });
    case actionTypes.UPDATE_NEW_PRODUCT:
      return updateObject(state, {
        info: action.info != null ? action.info : state.info,
        companies: action.companies != null ? action.companies : state.companies
      });
    case actionTypes.TOGGLE_EDIT:
      return updateObject(state, {
        info: action.info,
        companies: action.companies,
        editMode: action.editMode
      });
    case actionTypes.TOGGLE_EDIT_MODE:
      return updateObject(state, {
        editMode: action.editMode
      });
    case actionTypes.SUBMIT_EDIT_PRODUCT_FORM:
      return updateObject(state, { companies: initialCompanies });
    default:
      return state;
  }
};
