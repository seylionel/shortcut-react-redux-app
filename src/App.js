import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import HomePage from "./components/pages/home/HomePage";
import SoftwaresPage from "./components/pages/softwares/SoftwaresPage";
import AddShortcutPage from "./components/pages/add-shortcut/AddShortcutPage";
import 'bootstrap';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/softwares' component={SoftwaresPage}/>
        <Route path='/add-shortcut' component={AddShortcutPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
