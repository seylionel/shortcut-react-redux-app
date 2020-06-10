import {
  FETCH_SHORTCUTS_PENDING,
  FETCH_SHORTCUTS_FAILURE,
  FETCH_SHORTCUTS_SUCCESS,
  FETCH_SOFTWARE_FAILURE,
  FETCH_SOFTWARE_PENDING,
  FETCH_SOFTWARE_SUCCESS,
    ADD_SHORTCUTS_SUCESS,
    ADD_SHORTCUTS_PENDING,
    ADD_SHORTCUTS_FAILURE,
} from "../actions/actions";

const initialState = {
  shortcuts: [],
  software: [],
  errors: [],
  chargement: {form: false},
  erreurs: {form: null},
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
    case ADD_SHORTCUTS_PENDING:
      return { ...state, chargement: {...state.chargement, form: true}};
    case ADD_SHORTCUTS_FAILURE:
      return { ...state, chargement: { ...state.chargement, form: false},
      error: { ...state.erreurs, form: action.payload.erreurs}}
    case ADD_SHORTCUTS_SUCESS:
      return { ...state, chargement: { ...state.chargement, form: false},
        error: { ...state.erreurs, form: null},
      shortcuts: [ ...state.shortcuts, action.payload.shortcut]};
    default:
      return state;
  }
}

export default raccourcis;
