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
let initialVariants = [
  {
    company: {
      _id: "5cc1f75d0955774cbc422e8e",
      name: "crop king seeds"
    },
    alias: "",
    sotiId: "",
    sttId: 0,
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
    company: {
      _id: "5cc770893ec3eb9a6db06d4b",
      name: "sonoma seeds"
    },
    alias: "",
    sotiId: "",
    sttId: 0,
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
    company: {
      _id: "5cc771403ec3eb9a6db0be7e",
      name: "sunwest genetics"
    },
    alias: "",
    sotiId: "",
    sttId: 0,
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
    company: {
      _id: "5cc76df43ec3eb9a6dafa9ac",
      name: "beaver seeds"
    },
    alias: "",
    sotiId: "",
    sttId: 0,
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
    company: {
      _id: "5cc772bd3ec3eb9a6db1295d",
      name: "mary janes garden"
    },
    alias: "",
    sotiId: "",
    sttId: 0,
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
    company: {
      _id: "5cc76f1c3ec3eb9a6db001cc",
      name: "mj seeds canada"
    },
    alias: "",
    sotiId: "",
    sttId: 0,
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
  companies: [],
  variants: initialVariants,
  distro: 0,
  editMode: false,
  formType: null
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
      return updateObject(state, { companies: action.newCompanies });
    case actionTypes.TOGGLE_PACK_INPUT:
      return updateObject(state, { variants: action.variants });
    case actionTypes.UPDATE_NEW_PRODUCT:
      return updateObject(state, {
        info: action.info ? action.info : state.info,
        variants: action.variants ? action.variants : state.variants
      });
    case actionTypes.TOGGLE_EDIT:
      return updateObject(state, {
        info: action.info,
        variants: action.variants,
        editMode: action.editMode,
        companies: action.companyButtons
      });
    case actionTypes.TOGGLE_EDIT_MODE:
      return updateObject(state, {
        editMode: action.editMode
      });
    case actionTypes.SUBMIT_EDIT_PRODUCT_FORM:
      return updateObject(state, { variants: initialVariants });
    case actionTypes.RESET_STORE:
      return updateObject(state, {
        variants: initialVariants,
        info: initialInfo,
        editMode: false,
        distro: 0,
        companies: [],
        formType: null
      });
    case actionTypes.DELETE_COMPANY_VARIANT:
      return updateObject(state, {
        deletedVariant: action.deleted,
        companies: action.companies,
        variants: action.variants
      });
    case actionTypes.DELETE_PACK_VARIANT:
      return updateObject(state, {
        variants: action.variants
      });
    case actionTypes.DELETE_STRAIN:
      return updateObject(state, {});
    case actionTypes.DUPLICATE_STRAINs:
      return updateObject(state, {});
    default:
      return state;
  }
};
