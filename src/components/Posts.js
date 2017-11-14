import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { requestPosts } from '../actions/postsActions';
import { changeTablePage, changeRowPerPage } from '../actions/uiActions';
import Post from './Post';
import PostCreate from './PostCreate'

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
  handleChangePage = (event, page) => {
    this.props.changeTablePage(page);
  };

  handleChangeRowsPerPage = event => {
    this.props.changeRowPerPage(event.target.value);
  };

  renderPosts(post, index) {
    return (
      <TableRow key={post.id}>
        <TableCell>{post.id}</TableCell>
        <TableCell>{post.first_name}</TableCell>
        <TableCell>{post.last_name}</TableCell>
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
        {posts.isFetching ? (
          <h2>loading</h2>
        ) : (
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
                {posts.posts
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
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                    rowsPerPage={ui.rowsPerPage}
                    page={ui.page}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </Paper>
        )}
        <div className="content">
          <Switch>
            <Route path="/posts/:postid" component={Post} />
            <Route path="/posts/new" component={PostCreate} />
          </Switch>
        </div>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    ui: state.ui,
  };
}

export default connect(mapStateToProps, {
  requestPosts,
  changeTablePage,
  changeRowPerPage,
})(Posts);
