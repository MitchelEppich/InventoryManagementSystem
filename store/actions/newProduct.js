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
      // let distro = data.distro; //distro index
      let type = 1;
      type = data.info.sativa > 60 ? 0 : type;
      type = data.info.indice < 60 ? 2 : type;
      

      //company variants
      let newVariants = data.companies.map((company, index) => {
        let newAttributes = company.packs;
        delete company.packs;
        return {
          ...company,
          releaseDate: "2018-06-01T07:00:00.000Z",
          attributes: newAttributes
        };
      });

      let newProduct = {
        ...data.info,
        variants: newVariants,
        type: type
      };
      console.log(newProduct);

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
