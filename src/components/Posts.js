import React, { Component } from 'react';

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
import Paper from 'material-ui/Paper';

class Posts extends Component {

  handleChange = (event, page) => {
    this.props.changeTablePage(page);
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
    const { posts, ui } = this.props;

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
