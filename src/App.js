import React, { Component } from 'react';
import logo from './logo.svg';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './actions/postsActions';

import './App.css';

class App extends Component {
  renderPosts(post, index) {
    return (
      <div key="index">
        {post.title}
      </div>
    )
  }
  componentWillMount() {
    this.props.requestPosts();
  }
  render() {
    const {posts} = this.props

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {posts.map(this.renderPosts)}

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    requestPosts: () => {
      dispatch(actions.requestPosts());
    },
  };
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
