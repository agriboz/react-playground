import * as types from '../actions/actionTypes';

const initialState = {
  page: 0,
  rowsPerPage: 10,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_TABLE_PAGE:
      return state.page;
    case types.SET_TABLE_ROWS_PER_PAGE:
      return state.rowsPerPage;
    case types.CHANGE_TABLE_PAGE:
      return {...state, page: action.page}
    case types.CHANGE_ROW_PER_PAGE:
      return {...state, rowsPerPage: action.rowsPerPage}
    default:
      return state;
  }
};
