import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { requestPosts } from '../actions/postsActions';
import { changeTablePage } from '../actions/uiActions';

import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableFooter,
  TablePagination,
} from 'material-ui/Table';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';

class Posts extends Component {
  handleChange = (event, page) => {
    this.props.changeTablePage(page);
  };
  renderPosts(post, index) {
    return (
      <TableRow key={post.id}>
        <TableCell>{post.id}</TableCell>
        <TableCell>{post.title}</TableCell>
        <TableCell>{post.body}</TableCell>
        <TableCell>
          <Link to={`posts/${post.id}`}>
            <Button color="primary">Detail</Button>
          </Link>
        </TableCell>
      </TableRow>
    );
  }
  componentWillMount() {
    this.props.requestPosts();
  }
  render() {
    const { posts, ui } = this.props;

    return (
      <Grid item xs>
        <Paper className="App">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Body</TableCell>
                <TableCell>Detail</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {posts
                .slice(
                  ui.page * ui.rowsPerPage,
                  ui.page * ui.rowsPerPage + ui.rowsPerPage
                )
                .map(this.renderPosts)}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  count={posts.length}
                  onChangePage={this.handleChange}
                  rowsPerPage={ui.rowsPerPage}
                  page={ui.page}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </Paper>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    posts: state.posts,
    ui: state.ui,
  };
}

export default connect(mapStateToProps, { requestPosts, changeTablePage })(
  Posts
);
