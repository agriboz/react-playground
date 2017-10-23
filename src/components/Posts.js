import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { requestPosts } from '../actions/postsActions';

import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableFooter,
  TablePagination,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';

class Posts extends Component {
  state = {
    page: 0,
    rowsPerPage: 10,
  };
  test = (event, page) => {
    this.setState({ page });
  };
  renderPosts(post, index) {
    return (
      <TableRow key={post.id}>
        <TableCell>{post.title}</TableCell>
      </TableRow>
    );
  }
  componentWillMount() {
    this.props.requestPosts();
  }
  render() {
    const { posts } = this.props;
    const { rowsPerPage, page } = this.state;

    return (
      <Paper className="App">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(this.renderPosts)}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                count={posts.length}
                onChangePage={this.test}
                rowsPerPage={rowsPerPage}
                page={page}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </Paper>
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

export default connect(mapStateToProps, { requestPosts })(Posts);
