/*******************************************/
/*Inventory/Home page, Renders all details of inventory*/
/******************************************/

import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import { Subscription } from "react-apollo";
import gql from "graphql-tag";

import Layout from "../HOC/Layout";
import Inventory from "../components/Inventory";

class Index extends Component {
  componentWillMount() {
    this.props.getAllInventory();
  }
  render() {
    return (
      <Layout router={this.props.router}>
        <div className="w-full mx-auto text-center py-4 mb-4">
          <h2 className="text-3xl font-bold uppercase text-teal">Inventory</h2>
        </div>
        <Inventory {...this.props} />
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
    toggleEdit: props => dispatch(actions.toggleEdit(props)),
    handleInventoryEdit: (key, value) =>
      dispatch(actions.handleInventoryEdit(key, value)),
    submitInventoryEdit: currentEdit =>
      dispatch(actions.submitInventoryEdit(currentEdit)),
    setOrderBy: orderBy => dispatch(actions.setOrderBy(orderBy)),
    search: value => dispatch(actions.search(value)),
    applyFilters: () => dispatch(actions.applyFilters()),
    clearFilters: () => dispatch(actions.clearFilters()),
    updateFilters: (name, valueObj) =>
      dispatch(actions.updateFilters(name, valueObj)),
    toggleShowAll: id => dispatch(actions.toggleShowAll(id)),
    toggleFormType: formType => dispatch(actions.toggleFormType(formType)),
    getAllInventory: () => dispatch(actions.getAllInventory())
  };
};

const subscription = {};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
