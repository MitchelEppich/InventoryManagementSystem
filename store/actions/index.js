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
import NewProduct from "./newProduct";

const uri = "http://localhost:3000/graphql";
// const uri = "http://138.197.158.74:80/graphql";

const imports = {
  ...User(uri),
  ...Nav(uri),
  ...NewProduct(uri)
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

const query = {
  getAllCompanies: gql`
    query {
      allCompanies {
        _id
        assetsUrl
        website
        phone
        socials
        email
        name
      }
    }
  `,
  getAllStrains: gql`
    query {
      allStrains {
        _id
        name
        category
        breeder
        origin
        cbd
        thc
        cbn
        effect
        yield
        genetic
        flowerTime
        difficulty
        indica
        sativa
        ruderalis
        environment
        location {
          _id
          aisle
          section
          color
          distributor {
            country
          }
        }
        variants {
          _id
          company {
            _id
            assetsUrl
            website
            phone
            socials
            email
          }
          sotiId
          alias
          description
          summary
          releaseDate
          sttId
          attributes {
            _id
            price
            size
            stock {
              _id
              amount
              rop
              noe
              sold
            }
          }
        }
        stock {
          _id
          amount
          rop
          noe
          sold
        }
      }
    }
  `,
  getAllAttributes: gql`
    query {
      allAttributes {
        _id
        price
        size
        stock {
          _id
          amount
          rop
          noe
          sold
          distributor
          updatedAt
        }
        updatedAt
      }
    }
  `,
  getAllVariants: gql``,
  getAllStocks: gql``,
  getAllLocations: gql``,
  getAllDistributors: gql``
};

const mutation = {
  deleteCompany: gql`
    mutation($_id: String) {
      deleteCompany(input: { _id: $_id }) {
        _id
      }
    }
  `,
  deleteVariant: gql`
    mutation($_id: String) {
      deleteVariant(input: { _id: $_id }) {
        _id
      }
    }
  `,
  deleteAttribute: gql`
    mutation($_id: String) {
      deleteAttribute(input: { _id: $_id }) {
        _id
      }
    }
  `,
  deleteDistributor: gql`
    mutation($_id: String) {
      deleteDistributor(input: { _id: $_id }) {
        _id
      }
    }
  `,
  deleteStrain: gql`
    mutation($_id: String) {
      deleteStrain(input: { _id: $_id }) {
        _id
      }
    }
  `,
  deleteStock: gql`
    mutation($_id: String) {
      deleteStock(input: { _id: $_id }) {
        _id
      }
    }
  `,
  deleteLocation: gql`
    mutation($_id: String) {
      deleteLocation(input: { _id: $_id }) {
        _id
      }
    }
  `
};

export default {
  // TYPES
  ...actionTypes,
  // IMPORTS
  ...imports,
  // ACTIONS
  ...actions
};
