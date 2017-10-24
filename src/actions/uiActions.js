import * as types from './actionTypes';

export function changeTablePage(page) {
  return {
    type: types.CHANGE_TABLE_PAGE,
    page
  }
}
