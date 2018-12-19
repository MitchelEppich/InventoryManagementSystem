import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
  promptUsers: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USERS:
      return updateObject(state, { promptUsers: action.users });
    case actionTypes.MODIFY_USER:
      return updateObject(state, { promptUsers: action.input });
    case actionTypes.DELETE_USER:
      return updateObject(state, { promptUsers: action.input });
    default:
      return state;
  }
};
