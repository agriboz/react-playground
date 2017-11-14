import React, { Component } from 'react';
import { connect } from 'react-redux';

import { requestPost } from '../actions/postActions';

class Post extends Component {
  componentWillMount(ownProps) {
    const postid = this.props.match.params.postid;
    this.props.requestPost(postid);
  }

  render() {
    const post = this.props;
    return (
      <div>
        <h1>
          {post.last_name} - {post.first_name}
        </h1>
        <p>{post.email}</p>
      </div>
    );
  }
}

export default connect(state => state.post, { requestPost })(Post);
