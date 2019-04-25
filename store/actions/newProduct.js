/*******************************************/
/*User Actions for all user related
dispatch actions*/
/******************************************/

import gql from "graphql-tag";
import { makePromise, execute } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import fetch from "node-fetch";

const actionTypes = {
  TOGGLE_FORM_TYPE: "TOGGLE_FORM_TYPE",
  TOGGLE_ENV_INPUTS: "TOGGLE_ENV_INPUTS",
  TOGGLE_COMPANY_VARIANT: "TOGGLE_COMPANY_VARIANT",
  TOGGLE_PACK_INPUT: "TOGGLE_PACK_INPUT",
  UPDATE_NEW_PRODUCT: "UPDATE_NEW_PRODUCT",
  SUBMIT_NEW_PRODUCT_FORM: "SUBMIT_NEW_PRODUCT_FORM"
};

const getActions = uri => {
  const objects = {
    toggleFormType: formType => {
      return {
        type: actionTypes.TOGGLE_FORM_TYPE,
        formType: formType,
        category: formType == "strain" ? 0 : 1
      };
    },
    toggleEnvInputs: envType => {
      return {
        type: actionTypes.TOGGLE_ENV_INPUTS,
        envType: envType
      };
    },
    toggleCompanyVariant: newVariantsObj => {
      let newVariant = newVariantsObj.company,
        oldVariants = newVariantsObj.variants,
        removed = false;
      let newVariants = oldVariants.filter(variant => {
        if (variant == newVariant) {
          removed = true;
          return false;
        }
        return true;
      });
      return {
        type: actionTypes.TOGGLE_COMPANY_VARIANT,
        newVariants: removed ? newVariants : [...newVariants, newVariant]
      };
    },
    togglePackInput: newCompanies => {
      return {
        type: actionTypes.TOGGLE_PACK_INPUT,
        newCompanies: newCompanies
      };
    },
    updateNewProduct: obj => {
      switch (obj.type) {
        case "info":
          return {
            type: actionTypes.UPDATE_NEW_PRODUCT,
            info: obj.info
          };
        case "companies":
          return {
            type: actionTypes.UPDATE_NEW_PRODUCT,
            companies: obj.companies
          };
      }
    },
    creatNewProduct: data => {
      console.log(data);
      ////////////////////////////////////////////
      //STOCK NEEDS TO BE DEALT WITH (DISTRIBUTORS)
      ////////////////////////////////////////////
      let distro = data.distro;
      let newVariants = data.companies.map((company, index) => {
        let newAttributes = company.packs.map((pack, index) => {
          let stock = [
            {
              amount: null,
              rop: null,
              noe: null
            },
            {
              amount: null,
              rop: null,
              noe: null
            }
          ];
          stock.splice(distro, 1, {
            amount: pack.amount,
            rop: pack.rop,
            noe: pack.rop + pack.rop * 0.3
          });
          return {
            price: pack.price,
            size: pack.packSize,
            stock: stock
          };
        });
        //TODO: test
        delete company.packs;
        return {
          ...company,
          releaseDate: "2018-06-01T07:00:00.000Z",
          attributes: [...newAttributes]
        };
      });
      let newLocation = ["", ""];
      newLocation.splice(distro, 1, data.info.location);
      //TODO: test
      delete data.info.location;
      let newProduct = {
        ...data.info,
        location: [...newLocation],
        variants: [...newVariants],
        stock: newStock
      };

      return {
        type: actionTypes.SUBMIT_NEW_PRODUCT_FORM
      };
    }
  };

  return { ...objects };
};
const query = {};

const mutation = {};

export default uri => {
  const actions = getActions(uri);
  return {
    // TYPES
    ...actionTypes,
    // ACTIONS
    ...actions
  };
};
