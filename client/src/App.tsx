// https://babeljs.io/docs/en/babel-polyfill
// Make sure polyfill is imported before any other code at entrypoint.
import "core-js/stable";
import "regenerator-runtime/runtime";
import "normalize.css";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Paths from "./constants/Paths";
import Home from "./components/pages/Home";
import WalletManagement from "./components/pages/WalletManagement";

const HomePage = () => <Home apiAddr="http://localhost:3001" />;
const WalletManagementPage = () => <WalletManagement />;

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Paths.home} component={HomePage} />
        <Route path={Paths.walletManagement} component={WalletManagementPage} />
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
