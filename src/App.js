import "./App.css";
import React, { useState } from "react";
import { Route } from "react-router-dom";
import SpellSearching from "./pages/SpellSearch/SpellSearch";
import SpellDetails from "./pages/SpellDetails/SpellDetails";
function App() {
  return (
    <div className="App">
      <h1 className="app-title">Hi Welcome to the Spell Checker Game</h1>

      <Route
        exact
        path="/spell/:name"
        render={({ location, match }) => (
          <SpellDetails location={location} match={match} />
        )}
      />

      <Route exact path="/" render={() => <SpellSearching />} />
    </div>
  );
}

export default App;
