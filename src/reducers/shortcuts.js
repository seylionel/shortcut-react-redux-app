import {
  FETCH_SHORTCUTS_PENDING,
  FETCH_SHORTCUTS_FAILURE,
  FETCH_SHORTCUTS_SUCCESS
} from "../actions/actions";

const initialState = {
  shortcuts: [],
  error: [],
  loading: false
};

function shortcuts(state = initialState, action) {
  switch (action.type) {
    case FETCH_SHORTCUTS_PENDING:
      return { ...state, loading: true };
    case FETCH_SHORTCUTS_FAILURE:
      return { ...state, loading: false, errors: [ ...state.errors, action.payload.error ] };
    case FETCH_SHORTCUTS_SUCCESS:
      return { ...state, loading: false, shortcuts: action.payload.shortcuts };
    default:
      return state;
  }
}

export default shortcuts;
