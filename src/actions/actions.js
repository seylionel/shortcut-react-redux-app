export const FETCH_SHORTCUTS_PENDING = 'FETCH_SHORTCUTS_PENDING';
export const FETCH_SHORTCUTS_FAILURE = 'FETCH_SHORTCUTS_FAILURE';
export const FETCH_SHORTCUTS_SUCCESS = 'FETCH_SHORTCUTS_SUCCESS';
export const ADD_SHORTCUTS_PENDING = 'ADD_SHORTCUTS_PENDING';
export const ADD_SHORTCUTS_FAILURE = 'ADD_SHORTCUTS_FAILURE';
export const ADD_SHORTCUTS_SUCESS = 'ADD_SHORTCUTS_SUCESSS';
export const FETCH_SOFTWARE_PENDING = 'FETCH_SOFTWARES_PENDING';
export const FETCH_SOFTWARE_FAILURE = 'FETCH_SOFTWARES_FAILURE';
export const FETCH_SOFTWARE_SUCCESS = 'FETCH_SOFTWARES_SUCCESS';


export function fetchSoftware() {
  return dispatch => {
    dispatch(fetchSoftwarePending());
    fetch(process.env.REACT_APP_API_URL + '/software')
        .then(response => response.json())
        .then(data => dispatch(fetchSoftwareSuccess(data['hydra:member'])))
        .catch(error => dispatch(fetchSoftwareFailure(error)));
  };
}

export function fetchSoftwarePending() {
  return { type: FETCH_SOFTWARE_PENDING, payload: null };
}

export function fetchSoftwareFailure(error) {
  return { type: FETCH_SOFTWARE_FAILURE, payload: { error: error } };
}

export function fetchSoftwareSuccess(software) {
  return { type: FETCH_SOFTWARE_SUCCESS, payload: { software: software } };
}


export function fetchShortcuts() {
  return dispatch => {
    dispatch(fetchShortcutsPending());
    fetch(process.env.REACT_APP_API_URL + '/shortcuts?order%5Bcreated_at%5D=desc')
      .then(response => response.json())
      .then(data => dispatch(fetchShortcutsSuccess(data['hydra:member'])))
      .catch(error => dispatch(fetchShortcutsFailure(error)));
  };
}



export function fetchShortcutsPending() {
  return { type: FETCH_SHORTCUTS_PENDING, payload: null };
}

export function fetchShortcutsFailure(error) {
  return { type: FETCH_SHORTCUTS_FAILURE, payload: { error: error } };
}

export function fetchShortcutsSuccess(shortcuts) {
  return { type: FETCH_SHORTCUTS_SUCCESS, payload: { shortcuts: shortcuts } };
}

export function addShortcutsPending(){
  return {type : ADD_SHORTCUTS_PENDING, payload: null}
}

export function addShortcutsFailure(error){
  return {type : ADD_SHORTCUTS_FAILURE, payload: {error: error}};
}

export function addShortcutsSuccess(shortcut){
  return {type : ADD_SHORTCUTS_SUCESS, payload:{shortcut: shortcut}}
}

export function addShortcut(shortcut) {
  return dispatch => {
    dispatch(addShortcutsPending());
    fetch(process.env.REACT_APP_API_URL + '/shortcuts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(shortcut)
    })
        .then(response =>  {
          if (response.status !== 200){
            return dispatch(addShortcutsFailure(response.statusText))
          }
          return response.json()
        })
        .then(data => {
          if (typeof data['id'] !== 'undefined'){
            dispatch(addShortcutsSuccess(data));
  }
})
        .catch(err => dispatch(addShortcutsFailure(err)))
  };
}
