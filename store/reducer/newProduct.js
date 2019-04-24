import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_FORM_TYPE:
      return updateObject(state, { formType: action.formType });
    default:
      return state;
  }
};
