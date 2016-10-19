import React from 'react';

export default class Counter extends React.Component {
  render () {
    return <span>count: {this.props.param}</span>
  }
}