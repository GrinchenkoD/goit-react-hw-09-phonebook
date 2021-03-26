import Header from "./header/Header";
import Main from "./main/Main.jsx";

import React, { Component } from "react";
import { getCurrentUser } from "../redux/auth/auth.operations";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }
}
// const mapStateToProps = (state) => ({

// });

const mapDispatchToProps = {
  getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
