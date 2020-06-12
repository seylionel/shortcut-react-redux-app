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
import AddShortcutPage from "./components/pages/add-shortcut/AddShortcutPage";
import SoftwareContainer from "./components/pages/softwares/SoftwareContainer";

import 'bootstrap';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import './App.scss';
import DetailsCardContainer from "./components/pages/excerpts/DetailsCardContainer";
import ShortcutCardContainer from "./components/shortcut/card/ShortcutCardContainer";
import SoftwaresShortcutContainer from "./components/pages/softwares/SoftwaresShortcutContainer";
import ShortcutFilterContainer from "./components/pages/add-shortcut/ShortcutFilterContainer";


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
          <Route exact path={'/ShortcutCard'} component={ShortcutCardContainer}/>
          <Route path='/softwares' component={SoftwareContainer}/>
          <Route path='/add-shortcut' component={AddShortcutPage}/>
        </Switch>
        <Route path='/softwares/:id' component={SoftwaresShortcutContainer}/>


      </BrowserRouter>
    </Provider>
  );
}

export default App;
