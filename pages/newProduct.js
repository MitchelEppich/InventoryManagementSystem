/*******************************************/
/*New Products page, Form to add new product*/
/******************************************/

import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import { Subscription } from "react-apollo";
import gql from "graphql-tag";

import Layout from "../HOC/Layout";
import NewProduct from "../components/NewProduct";

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
  componentWillMount() {
    if (!this.props.newProduct.editMode) {
      this.props.resetStore();
    }
  }

  render() {
    return (
      <Layout router={this.props.router}>
        <NewProduct {...this.props} />
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    releaseCredentials: input => dispatch(actions.releaseCredentials(input)),
    setVisibleScreen: input => dispatch(actions.setVisibleScreen(input)),
    toggleFormType: formType => dispatch(actions.toggleFormType(formType)),
    toggleEnvInputs: envType => dispatch(actions.toggleEnvInputs(envType)),
    toggleCompanyVariant: newCompaniesObj =>
      dispatch(actions.toggleCompanyVariant(newCompaniesObj)),
    togglePackInput: newVariants =>
      dispatch(actions.togglePackInput(newVariants)),
    updateNewProduct: input => dispatch(actions.updateNewProduct(input)),
    editProduct: data => dispatch(actions.editProduct(data)),
    createNewProduct: data => dispatch(actions.createNewProduct(data)),
    resetStore: () => dispatch(actions.resetStore()),
    deleteCompanyVariant: input =>
      dispatch(actions.deleteCompanyVariant(input)),
    deletePackVariant: input => dispatch(actions.deletePackVariant(input)),
    deleteStrain: input => dispatch(actions.deleteStrain(input)),
    duplicateStrain: strain => dispatch(actions.duplicateStrain(strain))
  };
};

const subscription = {};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
