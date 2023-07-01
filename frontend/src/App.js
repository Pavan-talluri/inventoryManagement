import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';


import './App.css';
import CardContainer from './sellers/CardContainer';
import SignIn from './loginsignup/SignIn';
import Home from './home/Home';
import Error404 from "./Error404";
import NavBar from "./NavBar";
import CurrentOrders from "./currentOrders/CurrentOrders";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>              
        <BrowserRouter>
          <Routes>
            <Route exact path='/login' Component={SignIn} />
            <Route path='/seller' Component={CardContainer} />
            <Route path='/' Component={Home} />
            <Route path='/orders' Component={CurrentOrders} />
            <Route path="*" Component={Error404} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
