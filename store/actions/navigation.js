/*******************************************/
/*User Actions for all user related
dispatch actions*/
/******************************************/

import gql from "graphql-tag";
import { makePromise, execute } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import fetch from "node-fetch";

const actionTypes = {
  FETCH_USERS: "FETCH_USERS",
  MODIFY_USER: "MODIFY_USER",
  DELETE_USER: "DELETE_USER"
};

const getActions = uri => {
  const objects = {
    fetchUsers: () => {
      return dispatch => {
        const link = new HttpLink({ uri, fetch: fetch });

        const operation = {
          query: query.getUsers
        };

        return makePromise(execute(link, operation))
          .then(data => {
            let users = data.data.allUsers;
            dispatch({
              type: actionTypes.FETCH_USERS,
              users: users
            });
            return Promise.resolve(users);
          })
          .catch(error => console.log(error));
      };
    },
    modifyUser: input => {
      let _promptUsers = input.promptUsers;
      let _user = input.user;

      let _index = 0;
      for (let _u of _promptUsers) {
        if (_u.username == _user.username) {
          _promptUsers[_index] = _user;
          break;
        }
        _index++;
      }

      return {
        type: actionTypes.MODIFY_USER,
        input: _promptUsers
      };
    },
    deleteUser: input => {
      return dispatch => {
        const link = new HttpLink({ uri, fetch: fetch });

        const operation = {
          query: mutation.deleteUser,
          variables: { username: input.username }
        };

        makePromise(execute(link, operation))
          .then(data => {
            let _promptUsers = input.promptUsers.filter(a => {
              if (a.username == input.username) return false;
              return true;
            });

            dispatch({
              type: actionTypes.DELETE_USER,
              input: _promptUsers
            });
          })
          .catch(error => console.log(error));
      };
    }
  };

  return { ...objects };
};
const query = {
  getUsers: gql`
    query {
      allUsers {
        username
        name
        badge
        locked
        online
        lastAction
        admin
      }
    }
  `
};

const mutation = {
  deleteUser: gql`
    mutation($username: String) {
      deleteUser(input: { username: $username }) {
        username
      }
    }
  `
};

export default uri => {
  const actions = getActions(uri);
  return {
    // TYPES
    ...actionTypes,
    // ACTIONS
    ...actions
  };
};
