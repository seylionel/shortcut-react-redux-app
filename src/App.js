import React from 'react';
import {BrowserRouter} from "react-router-dom";
import 'bootstrap';
import NavBar from "./components/navbar/NavBar";
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
    </BrowserRouter>
  );
}

export default App;
