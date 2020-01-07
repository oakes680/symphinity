import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import GlobalStyle from './stylesheets/Global'

import { Search } from "./components/Search";
import LoginForm from "./components/LoginForm";
import Header from './components/Header';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Router>
      <GlobalStyle />
      <Header />
      <Route exact path="/">
        <LoginForm />
      </Route>
      <Route path="/search">
        <Search></Search>
      </Route>
    </Router>
  );
}

export default App;
