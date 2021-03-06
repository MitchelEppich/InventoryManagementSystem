/*******************************************/
/*Products page, Renders all products
    with relative data*/
/******************************************/

import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import { Subscription } from "react-apollo";
import gql from "graphql-tag";

import Layout from "../HOC/Layout";
import Products from "../components/Products";

class Index extends Component {
  // componentDidMount() {
  //   this.props.fetchCredentials().then(res => {
  //     if (res == null) return;
  //     this.props.setVisibleScreen(null);
  //   });
  // }
  // componentDidUpdate(prevProps) {
  //   if (this.props.user.currentUser == null) {
  //     this.props.fetchCredentials().then(res => {
  //       if (res == null) return;
  //       this.props.setVisibleScreen(null);
  //     });
  //   }
  // }

  render() {
    return (
      <Layout router={this.props.router}>
        <div className="w-full mx-auto text-center py-4 mb-4">
          <h2 className="text-3xl font-bold uppercase text-teal">
            Product List
          </h2>
        </div>
        <Products {...this.props} />
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCredentials: () => dispatch(actions.fetchCredentials()),
    // fetchUsers: input => dispatch(actions.fetchUsers(input)),
    // verifyCredentials: input => dispatch(actions.verifyCredentials(input)),
    // registerCredentials: input => dispatch(actions.registerCredentials(input)),
    releaseCredentials: input => dispatch(actions.releaseCredentials(input)),
    // updateUser: input => dispatch(actions.updateUser(input)),
    // modifyUser: input => dispatch(actions.modifyUser(input)),
    // deleteUser: input => dispatch(actions.deleteUser(input)),
    setVisibleScreen: input => dispatch(actions.setVisibleScreen(input)),
    toggleEdit: _id => dispatch(actions.toggleEdit(_id)),
    handleInventoryEdit: (key, value) =>
      dispatch(actions.handleInventoryEdit(key, value)),
    submitInventoryEdit: currentEdit =>
      dispatch(actions.submitInventoryEdit(currentEdit)),
    setOrderBy: orderBy => dispatch(actions.setOrderBy(orderBy)),
    search: value => dispatch(actions.search(value)),
    applyFilters: () => dispatch(actions.applyFilters()),
    clearFilters: () => dispatch(actions.clearFilters())
  };
};

const subscription = {};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
