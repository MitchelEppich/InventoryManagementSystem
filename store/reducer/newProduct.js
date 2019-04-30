import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
  info: {
    name: "",
    category: 0,
    breeder: "",
    origin: [],
    thc: [0, 0],
    cbd: [0, 0],
    cbn: [0, 0],
    sativa: 0,
    indica: 0,
    ruderalis: 0,
    genetic: 0,
    environment: -1,
    yield: [],
    difficulty: 0,
    flowerTime: [0, 0],
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
  },
  variants: [],
  companies: [
    {
      name: "crop king seeds",
      alias: "",
      sotiId: "",
      sttId: 0,
      summary: "",
      description: [],
      packs: [
        {
          price: 0,
          size: 0,
          stock: [{ amount: 0, rop: 0, noe: 0 }]
        }
      ]
    },
    {
      name: "sonoma seeds",
      alias: "",
      sotiId: "",
      sttId: 0,
      summary: "",
      description: [],
      packs: [
        {
          price: 0,
          size: 0,
          stock: [{ amount: 0, rop: 0, noe: 0 }]
        }
      ]
    },
    {
      name: "sunwest genetics",
      alias: "",
      sotiId: "",
      sttId: 0,
      summary: "",
      description: [],
      packs: [
        {
          price: 0,
          size: 0,
          stock: [{ amount: 0, rop: 0, noe: 0 }]
        }
      ]
    },
    {
      name: "beaver seeds",
      alias: "",
      sotiId: "",
      sttId: 0,
      summary: "",
      description: [],
      packs: [
        {
          price: 0,
          size: 0,
          stock: [{ amount: 0, rop: 0, noe: 0 }]
        }
      ]
    },
    {
      name: "mary janes garden",
      alias: "",
      sotiId: "",
      sttId: 0,
      summary: "",
      description: [],
      packs: [
        {
          price: 0,
          size: 0,
          stock: [{ amount: 0, rop: 0, noe: 0 }]
        }
      ]
    },
    {
      name: "mj seeds canada",
      alias: "",
      sotiId: "",
      sttId: 0,
      summary: "",
      description: [],
      packs: [
        {
          price: 0,
          size: 0,
          stock: [{ amount: 0, rop: 0, noe: 0 }]
        }
      ]
    }
  ],
  distro: 0
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
    default:
      return state;
  }
};
