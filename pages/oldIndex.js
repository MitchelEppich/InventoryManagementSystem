/*******************************************/
/*Main page, Renders all home videos*/
/******************************************/

import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import Login from "../components/Login";

import { Subscription } from "react-apollo";
import gql from "graphql-tag";

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
      <Layout>
        {this.props.misc.visibleScreen != null &&
        this.props.misc.visibleScreen.includes("login") ? (
          <Login {...this.props} />
        ) : null}

        <Main {...this.props} />
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCredentials: () => dispatch(actions.fetchCredentials()),
    fetchUsers: input => dispatch(actions.fetchUsers(input)),
    verifyCredentials: input => dispatch(actions.verifyCredentials(input)),
    registerCredentials: input => dispatch(actions.registerCredentials(input)),
    releaseCredentials: input => dispatch(actions.releaseCredentials(input)),
    updateUser: input => dispatch(actions.updateUser(input)),
    modifyUser: input => dispatch(actions.modifyUser(input)),
    deleteUser: input => dispatch(actions.deleteUser(input)),
    setVisibleScreen: input => dispatch(actions.setVisibleScreen(input))
  };
};

const subscription = {};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
