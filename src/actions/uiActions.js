import * as types from './actionTypes';

export function changeTablePage(page) {
  return {
    type: types.CHANGE_TABLE_PAGE,
    page
  }
}

export function changeRowPerPage(rowsPerPage) {
  return {
    type: types.CHANGE_ROW_PER_PAGE,
    rowsPerPage
  }
}
