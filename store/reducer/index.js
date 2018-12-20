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
  editIndex: null,
  tHeadings: ["name", "ID", "company", "status", "qty(packed)", "qty(loose)", "lower lim.", "upper lim.", "R.O.P.", "N.O.E.", "location", "category", "price", "# sold"],
  inventory: [
    {
      name: "Grand Daddy Purple Autoflower Cannabis Seeds (5 Seeds)",
      id: "GDA5",
      company: "BVR",
      status: "Stocked",
      qtyP: "12000",
      qtyL: "5000",
      lowLim: 1000,
      upLim: 20000,
      rop: 5000,
      noe: 12500,
      location: "D9",
      category: "seed",
      price: 45.00,
      sold: 200000
    },
    {
      name: "Grand Daddy Purple Autoflower Cannabis Seeds (5 Seeds)",
      id: "GDA5",
      company: "BVR",
      status: "Stocked",
      qtyP: "12000",
      qtyL: "5000",
      lowLim: 1000,
      upLim: 20000,
      rop: 5000,
      noe: 12500,
      location: "D9",
      category: "seed",
      price: 45.00,
      sold: 200000
    },
    {
      name: "Grand Daddy Purple Autoflower Cannabis Seeds (5 Seeds)",
      id: "GDA5",
      company: "BVR",
      status: "Stocked",
      qtyP: "12000",
      qtyL: "5000",
      lowLim: 1000,
      upLim: 20000,
      rop: 5000,
      noe: 12500,
      location: "D9",
      category: "seed",
      price: 45.00,
      sold: 200000
    },
    {
      name: "Grand Daddy Purple Autoflower Cannabis Seeds (5 Seeds)",
      id: "GDA5",
      company: "BVR",
      status: "Stocked",
      qtyP: "12000",
      qtyL: "5000",
      lowLim: 1000,
      upLim: 20000,
      rop: 5000,
      noe: 12500,
      location: "D9",
      category: "seed",
      price: 45.00,
      sold: 200000
    },
    {
      name: "Grand Daddy Purple Autoflower Cannabis Seeds (5 Seeds)",
      id: "GDA5",
      company: "BVR",
      status: "Stocked",
      qtyP: "12000",
      qtyL: "5000",
      lowLim: 1000,
      upLim: 20000,
      rop: 5000,
      noe: 12500,
      location: "D9",
      category: "seed",
      price: 45.00,
      sold: 200000
    },
    {
      name: "Grand Daddy Purple Autoflower Cannabis Seeds (5 Seeds)",
      id: "GDA5",
      company: "BVR",
      status: "Stocked",
      qtyP: "12000",
      qtyL: "5000",
      lowLim: 1000,
      upLim: 20000,
      rop: 5000,
      noe: 12500,
      location: "D9",
      category: "seed",
      price: 45.00,
      sold: 200000
    },
    {
      name: "Grand Daddy Purple Autoflower Cannabis Seeds (5 Seeds)",
      id: "GDA5",
      company: "BVR",
      status: "Stocked",
      qtyP: "12000",
      qtyL: "5000",
      lowLim: 1000,
      upLim: 20000,
      rop: 5000,
      noe: 12500,
      location: "D9",
      category: "seed",
      price: 45.00,
      sold: 200000
    },
    {
      name: "Grand Daddy Purple Autoflower Cannabis Seeds (5 Seeds)",
      id: "GDA5",
      company: "BVR",
      status: "Stocked",
      qtyP: "12000",
      qtyL: "5000",
      lowLim: 1000,
      upLim: 20000,
      rop: 5000,
      noe: 12500,
      location: "D9",
      category: "seed",
      price: 45.00,
      sold: 200000
    },
    {
      name: "Grand Daddy Purple Autoflower Cannabis Seeds (5 Seeds)",
      id: "GDA5",
      company: "BVR",
      status: "Stocked",
      qtyP: "12000",
      qtyL: "5000",
      lowLim: 1000,
      upLim: 20000,
      rop: 5000,
      noe: 12500,
      location: "D9",
      category: "seed",
      price: 45.00,
      sold: 200000
    },
    {
      name: "Grand Daddy Purple Autoflower Cannabis Seeds (5 Seeds)",
      id: "GDA5",
      company: "BVR",
      status: "Stocked",
      qtyP: "12000",
      qtyL: "5000",
      lowLim: 1000,
      upLim: 20000,
      rop: 5000,
      noe: 12500,
      location: "D9",
      category: "seed",
      price: 45.00,
      sold: 200000
    },
    {
      name: "Grand Daddy Purple Autoflower Cannabis Seeds (5 Seeds)",
      id: "GDA5",
      company: "BVR",
      status: "Stocked",
      qtyP: "12000",
      qtyL: "5000",
      lowLim: 1000,
      upLim: 20000,
      rop: 5000,
      noe: 12500,
      location: "D9",
      category: "seed",
      price: 45.00,
      sold: 200000
    },
    {
      name: "Grand Daddy Purple Autoflower Cannabis Seeds (5 Seeds)",
      id: "GDA5",
      company: "BVR",
      status: "Stocked",
      qtyP: "12000",
      qtyL: "5000",
      lowLim: 1000,
      upLim: 20000,
      rop: 5000,
      noe: 12500,
      location: "D9",
      category: "seed",
      price: 45.00,
      sold: 200000
    },
    
  ],
};

const indexReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_VISIBLE_SCREEN:
      return updateObject(state, {
        visibleScreen: action.input
      });
    case actionTypes.TOGGLE_EDIT:
      return updateObject(state, {
        editIndex: state.editIndex == action.index ? null : action.index
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
