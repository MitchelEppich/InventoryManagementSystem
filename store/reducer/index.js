/*******************************************/
/*main reducer with miscellaneous state
 management.
 This reducer imports all other reducers and
  combines them to be exported to the store*/
/******************************************/

import actionTypes from "../actions";
import { combineReducers } from "redux";
import { updateObject } from "../utility";

import userReducer from "./user";
import navReducer from "./navigation";
import newProductReducer from "./newProduct";

const initialState = {
  visibleScreen: ["login"], // When [] show main screen
  distro: 0,
  inventory: [],
  logs: [
    {
      _id: 47378,
      name: "Tony Tone",
      action: "added 3 hunnid products",
      machine: "computer?",
      date: 20181120
    },
    {
      _id: 47378,
      name: "Tony Tone",
      action: "added 3 hunnid products",
      machine: "computer?",
      date: 20181120
    },
    {
      _id: 47378,
      name: "Tony Tone",
      action: "added 3 hunnid products",
      machine: "computer?",
      date: 20181120
    },
    {
      _id: 47378,
      name: "Tony Tone",
      action: "added 3 hunnid products",
      machine: "computer?",
      date: 20181120
    },
    {
      _id: 47378,
      name: "Tony Tone",
      action: "added 3 hunnid products",
      machine: "computer?",
      date: 20181120
    },
    {
      _id: 47378,
      name: "Tony Tone",
      action: "added 3 hunnid products",
      machine: "computer?",
      date: 20181120
    },
    {
      _id: 47378,
      name: "Tony Tone",
      action: "added 3 hunnid products",
      machine: "computer?",
      date: 20181120
    }
  ],
  currentEdit: { _id: -1 },
  iHeadings: [
    "name",
    "company",
    "status",
    "qty (Loose)",
    "ROP (Loose)",
    "NOE (Loose)",
    "breeder",
    "location",
    "category"
  ],
  iSubHeadings: [
    "company",
    "alias",
    "sotiId",
    "sttId",
    "price",
    "qty (packed)",
    "rop (packed)",
    "noe (packed)",
    "status"
  ],
  pHeadings: [
    "alias",
    "company",
    "soti id",
    "stt id",
    "strain",
    "breeder",
    "location",
    "sold",
    "release date"
  ],
  lHeadings: ["name", "action", "machine", "date"],
  orderBy: null,
  orderByReverse: false,
  applyFilters: false,
  activeFilters: {
    qtyP: {},
    qtyL: {},
    company: {},
    status: {},
    category: {}
  },
  showAllId: null
};

const indexReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_VISIBLE_SCREEN:
      let removed = false;
      for (let i = 0; i < state.visibleScreen.length; i++) {
        if (state.visibleScreen[i] == action.input) {
          state.visibleScreen.splice(i, 1);
          removed = true;
        }
      }
      if (!removed) {
        state.visibleScreen.push(action.input);
      }
      return updateObject(state, {
        visibleScreen: [...state.visibleScreen]
      });
    case actionTypes.HANDLE_INVENTORY_EDIT:
      for (let key in state.currentEdit) {
        if (state.currentEdit.hasOwnProperty(key)) {
          if (key == action.key) {
            state.currentEdit[key] = action.value;
          }
        }
      }
      return state;
    case actionTypes.SUBMIT_INVENTORY_EDIT:
      for (let i = 0; i < state.inventory.length; i++) {
        if (state.inventory[i]._id == action.currentEdit._id) {
          for (let key in action.currentEdit) {
            if (action.currentEdit.hasOwnProperty(key)) {
              if (action.currentEdit[key] != null) {
                state.inventory[i][key] = action.currentEdit[key];
              }
            }
            state.currentEdit[key] = null;
          }
        }
      }
      return updateObject(state, {
        currentEdit: {
          ...state.inventory,
          ...state.currentEdit
        }
      });
    case actionTypes.SET_ORDER_BY:
      return updateObject(state, {
        orderBy: action.orderBy,
        orderByReverse:
          state.orderBy == action.orderBy
            ? !state.orderByReverse
            : state.orderByReverse
      });
    case actionTypes.SEARCH:
      return updateObject(state, {
        searchValue: action.value
      });
    case actionTypes.APPLY_FILTERS:
      return updateObject(state, {
        applyFilters: true
      });
    case actionTypes.CLEAR_FILTERS:
      return updateObject(state, {
        applyFilters: false,
        activeFilters: {
          qtyP: {},
          qtyL: {},
          company: {},
          status: {},
          category: {}
        }
      });
    case actionTypes.UPDATE_FILTERS:
      for (let key in state.activeFilters) {
        if (state.activeFilters.hasOwnProperty(key)) {
          if (key == action.name) {
            state.activeFilters[key] = {
              ...state.activeFilters[key],
              ...action.valueObj
            };
          }
        }
      }
      return state;
    case actionTypes.TOGGLE_SHOW_ALL:
      return updateObject(state, {
        showAllId: action.id
      });
    case actionTypes.SUBMIT_NEW_PRODUCT_FORM:
      return updateObject(state, {
        inventory: [...state.inventory, action.newStrain]
      });
    case actionTypes.GET_ALL_INVENTORY:
      return updateObject(state, {
        inventory: action.inventory
      });
    default:
      return state;
  }
};

// export default indexReducer;
export default combineReducers({
  misc: indexReducer,
  user: userReducer,
  nav: navReducer,
  newProduct: newProductReducer
});
