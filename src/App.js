import React from 'react';
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunkMiddleware from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import reducers from "./reducers/reducers";
import {fetchShortcuts} from "./actions/actions";
import {fetchSoftware} from "./actions/actions";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import HomePage from "./components/pages/home/HomePage";
import SoftwaresPage from "./components/pages/softwares/SoftwaresPage";
import AddShortcutPage from "./components/pages/add-shortcut/AddShortcutPage";
import SoftwareContainer from "./components/pages/softwares/SoftwareContainer";

import 'bootstrap';
import './App.scss';
import DetailsCardContainer from "./components/pages/excerpts/DetailsCardContainer";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

store.dispatch(fetchShortcuts());
store.dispatch(fetchSoftware())

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path={'/DetailsCard/:id'} component={DetailsCardContainer}/>
          <Route path='/softwares' component={SoftwareContainer}/>
          <Route path='/add-shortcut' component={AddShortcutPage}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
