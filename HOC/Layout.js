/**************************************/
/*Our highest ordered component. This
component wraps each page. Naturally this
component has the navigation bar.*/
/**************************************/

import "../scss/home.scss";
import React, { Component } from "react";
import DevTools from "../store/DevTools";
import { connect } from "react-redux";
import actions from "../store/actions";
import "@fortawesome/fontawesome-svg-core/styles.css";

import Menu from "../components/Menu";

import Router from "next/router";

const isClient = typeof document !== "undefined";

class Layout extends Component {
  componentDidMount() {
    if (!isClient) return;
    this.props.fetchCredentials().then(res => {
      if (res == null || res.admin == null) Router.push("/login");
    });
  }
  componentDidUpdate(prevProps) {
    if (this.props.user.currentUser == null) {
      this.props.fetchCredentials().then(res => {
        if (res == null || res.admin == null) Router.push("/login");
      });
    }
  }

  render() {
    return (
      <div>
        {this.props.user.currentUser == null ? null : (
          <div>
            <Menu {...this.props} />
            <div className="pt-24 overflow-hidden">{this.props.children}</div>
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    releaseCredentials: input => dispatch(actions.releaseCredentials(input)),
    fetchCredentials: () => dispatch(actions.fetchCredentials()),
    // fetchUsers: input => dispatch(actions.fetchUsers(input)),
    // verifyCredentials: input => dispatch(actions.verifyCredentials(input)),
    // registerCredentials: input => dispatch(actions.registerCredentials(input)),
    // updateUser: input => dispatch(actions.updateUser(input)),
    // modifyUser: input => dispatch(actions.modifyUser(input)),
    // deleteUser: input => dispatch(actions.deleteUser(input)),
    setVisibleScreen: input => dispatch(actions.setVisibleScreen(input))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(Layout);
