import React from 'react';
import Counter from './counter';

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Counter param={ this.props.fuga }/><br/>
        <button onClick={ () => this.props.handleClick() }>＊増加＊</button>
      </div>
    );
  }
}