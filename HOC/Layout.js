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
import '@fortawesome/fontawesome-svg-core/styles.css'

import Menu from "../components/Menu"

class Layout extends Component {
  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    return (
      <div>
        <Menu {...this.props} />
        {this.props.children}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  state => state,
  mapDispatchToProps
)(Layout);
