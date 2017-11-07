import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

export default App;
