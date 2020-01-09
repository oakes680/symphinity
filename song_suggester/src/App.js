import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

// Application Component Imports
import { Navigation } from "./components/Navigation";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Saved from "./components/Saved";
import Register from "./components/Register";
import { Search } from "./components/Search";

// Milo
import TempDash from "./components/TempDash";

function App() {
  const [searchTerm, setSearchTerm] = useState({ search: "" });
  const [searchResults, setSearchResults] = useState([]);
  const [selectedSong, setSelectedSong] = useState({});
  const [songData, setSongData] = useState({});

  return (
    <div className="app-wrapper">
      <Route path="/" component={Navigation} />
      <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      {/* <PrivateRoute exact path="/dashboard" component={Dashboard} />  */}
      <Route path="/dashboard">
        <TempDash
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          searchResults={searchResults}
          setSearchResults={setSearchResults}
          selectedSong={selectedSong}
          setSelectedSong={setSelectedSong}
          songData={songData}
          setSongData={setSongData}
        ></TempDash>
      </Route>
      <Route path="/favorites" component={Saved} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/dashboard2" component={Dashboard} />
      <PrivateRoute path="/dashboard/saved" component={Saved} />
    </div>
  );
}

export default App;
