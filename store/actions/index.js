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
  TOGGLE_EDIT_MODE: "TOGGLE_EDIT_MODE",
  TOGGLE_EDIT: "TOGGLE_EDIT",
  HANDLE_INVENTORY_EDIT: "HANDLE_INVENTORY_EDIT",
  SUBMIT_INVENTORY_EDIT: "SUBMIT_INVENTORY_EDIT",
  SET_ORDER_BY: "SET_ORDER_BY",
  SEARCH: "SEARCH",
  APPLY_FILTERS: "APPLY_FILTERS",
  CLEAR_FILTERS: "CLEAR_FILTERS",
  UPDATE_FILTERS: "UPDATE_FILTERS",
  TOGGLE_SHOW_ALL: "TOGGLE_SHOW_ALL",
  GET_ALL_INVENTORY: "GET_ALL_INVENTORY"
};

const actions = {
  setVisibleScreen: input => {
    return {
      type: actionTypes.SET_VISIBLE_SCREEN,
      input: input
    };
  },
  toggleEditMode: editMode => {
    return {
      type: actionTypes.TOGGLE_EDIT_MODE,
      editMode: editMode
    };
  },
  toggleEdit: props => {
    let item = props.item;
    let companies = item.variants;
    let variantButtons = [];
    let oldCompanies = props.newProduct.companies;
    for (let i = 0; i < companies.length; i++) {
      let index = oldCompanies.findIndex(company => {
        return company.company._id == companies[i].company._id;
      });
      if (index >= 0) {
        oldCompanies.splice(index, 1, companies[i]);
        variantButtons.push(companies[i].company.name);
      }
    }
    let info = { ...item };
    return {
      type: actionTypes.TOGGLE_EDIT,
      editMode: true,
      info: info,
      companies: oldCompanies,
      variantButtons: variantButtons
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
  },
  getAllInventory: () => {
    return async dispatch => {
      const link = new HttpLink({ uri, fetch: fetch });
      const operation = {
        query: query.getAllStrains
      };
      await makePromise(execute(link, operation))
        .then(data => {
          let strains = data.data.allStrains;
          dispatch({
            type: actionTypes.GET_ALL_INVENTORY,
            inventory: strains
          });
        })
        .catch(error => console.log(error));
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
            _id
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
            name
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
  getAllVariants: gql`
    query {
      allVariants {
        _id
        company {
          _id
          assetsUrl
          email
          name
        }
        sotiId
        sttId
        alias
        summary
        releaseDate
        description
        reviews {
          _id
          name
          body
          email
          rating
          approved
          createdAt
        }
        attributes {
          _id
          price
          size
          updatedAt
        }
      }
    }
  `,
  getAllStocks: gql`
    query {
      allStocks {
        _id
        amount
        rop
        noe
        sold
        distributor
        updatedAt
      }
    }
  `,
  getAllLocations: gql`
    query {
      allLocations {
        _id
        distributor {
          _id
          country
        }
        aisle
        color
        section
        updatedAt
      }
    }
  `,
  getAllDistributors: gql`
    query {
      allDistributors {
        _id
        country
      }
    }
  `
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
