import {
  FETCH_SHORTCUTS_PENDING,
  FETCH_SHORTCUTS_FAILURE,
  FETCH_SHORTCUTS_SUCCESS,
  FETCH_SOFTWARE_FAILURE,
  FETCH_SOFTWARE_PENDING,
  FETCH_SOFTWARE_SUCCESS,
} from "../actions/actions";

const initialState = {
  shortcuts: [],
  software: [],
  errors: [],
  loading: false
};

function raccourcis(state = initialState, action) {
  switch (action.type) {
    case FETCH_SHORTCUTS_PENDING:
      return { ...state, loading: true };
    case FETCH_SHORTCUTS_FAILURE:
      return { ...state, loading: false, errors: [ ...state.errors, action.payload.error ] };
    case FETCH_SHORTCUTS_SUCCESS:
      return { ...state, loading: false, shortcuts: action.payload.shortcuts };
    case FETCH_SOFTWARE_PENDING:
      return { ...state, loading: true };
    case FETCH_SOFTWARE_FAILURE:
      return { ...state, loading: false, errors: [ ...state.errors, action.payload.error ] };
    case FETCH_SOFTWARE_SUCCESS:
      return { ...state, loading: false, software: action.payload.software };
    default:
      return state;
  }
}

export default raccourcis;
