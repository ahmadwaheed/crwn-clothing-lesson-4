import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

//exact: if we use exact within the Route, it will derender that component when we are trying to render other components.
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
