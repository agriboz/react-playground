import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { requestPosts } from '../actions/postsActions'

class Posts extends Component {
  renderPosts(post, index) {
    return (
      <div key={index}>
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
      </div>
    );
  }
  componentWillMount() {
    this.props.requestPosts();
  }
  render() {
    const { posts } = this.props;

    return (
      <div className="App">
       {posts.map(this.renderPosts)}
     </div>
    );
  }
}

/* function mapDispatchToProps(dispatch) {
  return {
    requestPosts: () => {
      dispatch(actions.requestPosts());
    },
  };
} */

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

export default connect(mapStateToProps, {requestPosts})(Posts);
