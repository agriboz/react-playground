import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/posts">Reduxstagram</Link>
        </h1>
      </div>
    );
  }
}

export default App;
