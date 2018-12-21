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

const initialState = {
  visibleScreen: ["login"], // When [] show main screen
  inventory: [
    {
      _id: 1432,
      name: "Grand Daddy Purple Autoflower Cannabis Seeds (5 Seeds)",
      id: "GDA5",
      company: ["BVR", "CKS", "SON", "SWG"],
      status: "Stocked",
      qtyP: 12000,
      qtyL: 5000,
      lowLim: 1000,
      upLim: 20000,
      rop: 15000,
      noe: 12500,
      location: "D9",
      category: "seed",
      price: 45.00,
      sold: 200000,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      barcode: 55373987654

    },
    {
      _id: 223,
      name: "Grand Daddy Purple Autoflower Cannabis Seeds (5 Seeds)",
      id: "GDA5",
      company: ["BVR", "CKS", "SON", "SWG"],
      status: "Stocked",
      qtyP: 12000,
      qtyL: 5000,
      lowLim: 4000,
      upLim: 20000,
      rop: 5000,
      noe: 12500,
      location: "D9",
      category: "seed",
      price: 45.00,
      sold: 200000,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      barcode: 55373987654

    },
    {
      _id: 3543,
      name: "Grand Daddy Purple Autoflower Cannabis Seeds (5 Seeds)",
      id: "GDA5",
      company: ["BVR", "CKS", "SON", "SWG"],
      status: "Stocked",
      qtyP: 12000,
      qtyL: 5000,
      lowLim: 2000,
      upLim: 20000,
      rop: 5000,
      noe: 12500,
      location: "D9",
      category: "seed",
      price: 45.00,
      sold: 200000,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      barcode: 55373987654

    },
    {
      _id: 433,
      name: "Grand Daddy Purple Autoflower Cannabis Seeds (5 Seeds)",
      id: "GDA5",
      company: ["BVR", "CKS", "SON", "SWG"],
      status: "Stocked",
      qtyP: 12000,
      qtyL: 5000,
      lowLim: 1000,
      upLim: 20500,
      rop: 5000,
      noe: 12500,
      location: "D9",
      category: "seed",
      price: 45.00,
      sold: 200000,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      barcode: 55373987654

    },
    {
      _id: 7654,
      name: "Grand Daddy Purple Autoflower Cannabis Seeds (5 Seeds)",
      id: "GDA5",
      company: ["BVR", "CKS", "SON", "SWG"],
      status: "Stocked",
      qtyP: 12000,
      qtyL: 5000,
      lowLim: 1000,
      upLim: 15000,
      rop: 5000,
      noe: 12500,
      location: "D9",
      category: "seed",
      price: 45.00,
      sold: 200000,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      barcode: 55373987654

    },
    {
      _id: 753345,
      name: "Grand Daddy Purple Autoflower Cannabis Seeds (5 Seeds)",
      id: "GDA5",
      company: ["BVR", "CKS", "SON", "SWG"],
      status: "Stocked",
      qtyP: 12000,
      qtyL: 9000,
      lowLim: 1000,
      upLim: 20000,
      rop: 5000,
      noe: 12500,
      location: "D9",
      category: "seed",
      price: 45.00,
      sold: 200000,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      barcode: 55373987654

    },
    {
      _id: 653,
      name: "Grand Daddy Purple Autoflower Cannabis Seeds (5 Seeds)",
      id: "GDA5",
      company: ["BVR", "CKS", "SON", "SWG"],
      status: "Stocked",
      qtyP: 12000,
      qtyL: 5000,
      lowLim: 1500,
      upLim: 20000,
      rop: 5000,
      noe: 12500,
      location: "D9",
      category: "seed",
      price: 45.00,
      sold: 200000,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      barcode: 55373987654

    },
    {
      _id: 7643234567,
      name: "Grand Daddy Purple Autoflower Cannabis Seeds (5 Seeds)",
      id: "GDA5",
      company: ["BVR", "CKS", "SON", "SWG"],
      status: "Stocked",
      qtyP: 14000,
      qtyL: 5000,
      lowLim: 1000,
      upLim: 20000,
      rop: 5000,
      noe: 12500,
      location: "D9",
      category: "seed",
      price: 45.00,
      sold: 200000,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      barcode: 55373987654

    },
    {
      _id: 2345,
      name: "Grand Daddy Purple Autoflower Cannabis Seeds (5 Seeds)",
      id: "GDA5",
      company: ["BVR", "CKS", "SON", "SWG"],
      status: "Stocked",
      qtyP: 12000,
      qtyL: 5000,
      lowLim: 1000,
      upLim: 20000,
      rop: 5050,
      noe: 12500,
      location: "D9",
      category: "seed",
      price: 45.00,
      sold: 200000,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      barcode: 55373987654

    },
    {
      _id: 83376653,
      name: "Grand Daddy Purple Autoflower Cannabis Seeds (5 Seeds)",
      id: "GDA5",
      company: ["BVR", "CKS", "SON", "SWG"],
      status: "Stocked",
      qtyP: 12000,
      qtyL: 5000,
      lowLim: 1000,
      upLim: 20600,
      rop: 5000,
      noe: 12500,
      location: "D9",
      category: "seed",
      price: 45.00,
      sold: 200000,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      barcode: 55373987654

    },
    {
      _id: 337358,
      name: "Grand zzzaddy Purple Autoflower Cannabis Seeds (5 Seeds)",
      id: "GDA5",
      company: ["BVR", "CKS", "SON", "SWG"],
      status: "Stocked",
      qtyP: 12000,
      qtyL: 500,
      lowLim: 1000,
      upLim: 20000,
      rop: 5000,
      noe: 12500,
      location: "D9",
      category: "seed",
      price: 45.00,
      sold: 200000,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      barcode: 55373987654

    },
    {
      _id: 47378,
      name: "brand Daddy Purple Autoflower Cannabis Seeds (5 Seeds)",
      id: "GDA5",
      company: ["BVR", "CKS", "SON"],
      status: "Stocked",
      qtyP: 16000,
      qtyL: 5000,
      lowLim: 1000,
      upLim: 20000,
      rop: 5000,
      noe: 12500,
      location: "D9",
      category: "seed",
      price: 45.00,
      sold: 200000,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      barcode: 55373987654

    },
  ],
  currentEdit: {
    _id: null,
    qtyP: null,
    qtyL: null,
    lowLim: null,
    upLim: null,
    sold: null,
    rop: null,
    name: null,
    id: null,
    company: null,
    location: null,
    category: null,
    price: null,
    description: null,
    barcode: null
  },
  iHeadings: ["name", "id", "company", "status", "qty(packed)", "qty(loose)", "lower lim.", "upper lim.", "# sold", "R.O.P.", "N.O.E.", "location", "category", "price"],
  pHeadings: ["name", "id", "company", "description", "barcode", "category", "price"],
  orderBy: null,
  orderByReverse: false

};

const indexReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_VISIBLE_SCREEN:
      let removed = false;
      for(let i = 0; i < state.visibleScreen.length; i++){
        if(state.visibleScreen[i] == action.input){
          state.visibleScreen.splice(i, 1);
          removed = true;
        }
      }
      if(!removed){
        state.visibleScreen.push(action.input);
      }
      return updateObject(state, {
        visibleScreen: [...state.visibleScreen]
      });
    case actionTypes.TOGGLE_EDIT:
      return updateObject(state, {
        currentEdit: {
          ...state.currentEdit,
          _id: action._id
        }
      });
    case actionTypes.HANDLE_INVENTORY_EDIT:
      for (let key in state.currentEdit) {
          if (state.currentEdit.hasOwnProperty(key)) {
            if(key == action.key){
              state.currentEdit[key] = action.value;
            }
          }
      }
      return updateObject(state, {
        currentEdit: {
          ...state.currentEdit
        }
      });
    case actionTypes.SUBMIT_INVENTORY_EDIT:
      for(let i = 0; i < state.inventory.length; i++){
        if(state.inventory[i]._id == action.currentEdit._id){
          for (let key in action.currentEdit) {
            if (action.currentEdit.hasOwnProperty(key)) {
              if(action.currentEdit[key] != null){
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
        orderByReverse: state.orderBy == action.orderBy ? !state.orderByReverse : state.orderByReverse
      });
    case actionTypes.SEARCH:
      return updateObject(state, {
        searchValue: action.value
      });
    default:
      return state;
  }
};

// export default indexReducer;
export default combineReducers({
  misc: indexReducer,
  user: userReducer,
  nav: navReducer
});
