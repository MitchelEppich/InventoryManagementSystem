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
  ADD_COMPANY_VARIANT: "ADD_COMPANY_VARIANT"
};

const getActions = uri => {
  const objects = {
    toggleFormType: formType => {
      return {
        type: actionTypes.TOGGLE_FORM_TYPE,
        formType: formType
      };
    },
    toggleEnvInputs: envType => {
      return {
        type: actionTypes.TOGGLE_ENV_INPUTS,
        envType: envType
      };
    },
    addCompanyVariant: newVariants => {
      return {
        type: actionTypes.ADD_COMPANY_VARIANT,
        newVariants: newVariants
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
