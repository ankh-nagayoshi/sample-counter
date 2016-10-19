import React from 'react';
import { connect } from 'react-redux';
import App from '../components/app';
import AppActions from '../actions/app';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    handleClick: () => {
      dispatch(AppActions.increment())
    }
  }
}

//connectでReduxとReactコンポーネントをつなぐ
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)