import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../store/actionCreator/operation";
import { actionToggle } from "../store/actionCreator/toggle";
import { Header } from "../components/Header/Header";

function App(props) {
  console.log(props);
  return (
    <div className="App">
      {props.loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <Header />
          <h1>{props.count}</h1>
          <h1>{props.isToggle ? "is" : "not"}</h1>
          <button onClick={() => props.actionIncrement()}>increment</button>
          <button onClick={() => props.actionDecrement()}>decrement</button>
          <button onClick={() => props.toggle()}>toggle</button>
        </>
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    count: state.count.count,
    isToggle: state.toggle.isToggle,
    loading: state.toggle.loading
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch(actionIncrement()),
//     decrement: () => dispatch(actionDecrement()),
//     toggle: () => dispatch(actionToggle())
//   };
// };

export default connect(mapStateToProps, mapDispatchToProps)(App);
