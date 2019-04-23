/*******************************************/
/*Index Actions for all miscellaneous related
dispatch actions. All other actiontypes are
imported into this file, to then be exported
for the reducers and corresponding pages.*/
/******************************************/

import gql from "graphql-tag";
import { makePromise, execute } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import fetch from "node-fetch";

import User from "./user";
import Nav from "./navigation";

const uri = "http://localhost:3000/graphql";
// const uri = "http://138.197.158.74:80/graphql";

const imports = {
  ...User(uri),
  ...Nav(uri)
};

const actionTypes = {
  SET_VISIBLE_SCREEN: "SET_VISIBLE_SCREEN",
  TOGGLE_EDIT: "TOGGLE_EDIT",
  HANDLE_INVENTORY_EDIT: "HANDLE_INVENTORY_EDIT",
  SUBMIT_INVENTORY_EDIT: "SUBMIT_INVENTORY_EDIT",
  SET_ORDER_BY: "SET_ORDER_BY",
  SEARCH: "SEARCH",
  APPLY_FILTERS: "APPLY_FILTERS",
  CLEAR_FILTERS: "CLEAR_FILTERS",
  UPDATE_FILTERS: "UPDATE_FILTERS",
  TOGGLE_SHOW_ALL: "TOGGLE_SHOW_ALL"
};

const actions = {
  setVisibleScreen: input => {
    return {
      type: actionTypes.SET_VISIBLE_SCREEN,
      input: input
    };
  },
  toggleEdit: _id => {
    return {
      type: actionTypes.TOGGLE_EDIT,
      _id
    };
  },
  handleInventoryEdit: (key, value) => {
    return {
      type: actionTypes.HANDLE_INVENTORY_EDIT,
      key: key,
      value: value
    };
  },
  submitInventoryEdit: currentEdit => {
    //post to server
    return {
      type: actionTypes.SUBMIT_INVENTORY_EDIT,
      currentEdit: currentEdit
    };
  },
  setOrderBy: orderBy => {
    return {
      type: actionTypes.SET_ORDER_BY,
      orderBy: orderBy
    };
  },
  search: value => {
    return {
      type: actionTypes.SEARCH,
      value: value
    };
  },
  applyFilters: () => {
    return {
      type: actionTypes.APPLY_FILTERS
    };
  },
  clearFilters: () => {
    return {
      type: actionTypes.CLEAR_FILTERS
    };
  },
  updateFilters: (name, valueObj) => {
    return {
      type: actionTypes.UPDATE_FILTERS,
      name: name,
      valueObj: valueObj
    };
  },
  toggleShowAll: id => {
    return {
      type: actionTypes.TOGGLE_SHOW_ALL,
      id: id
    };
  }
};

const query = {};

const mutation = {};

export default {
  // TYPES
  ...actionTypes,
  // IMPORTS
  ...imports,
  // ACTIONS
  ...actions
};
