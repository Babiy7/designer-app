import React from "react";
import { connect } from "react-redux";

import { Header } from "../components/Header/Header";

function App(props) {
  return (
    <div className="App">
      {/* <Header /> */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          height: "60px",
          margin: 0,
          padding: "0 0 0 20px",
          background: "red",
          color: "white"
        }}
      >
        <h1> Hello world </h1>
      </nav>
      <button onClick={() => props.test()}>click me</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    list: state.friends
  };
};

const mapDispatchToProps = dispatch => {
  return {
    test: () => dispatch({ type: "TEST AND IT IS WORK!" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
