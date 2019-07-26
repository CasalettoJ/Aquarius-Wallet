// https://babeljs.io/docs/en/babel-polyfill
// Make sure polyfill is imported before any other code at entrypoint.
import "core-js/stable";
import "regenerator-runtime/runtime";
import "normalize.css";
import "reset-css";
import "../../common/types/svg"; // https://stackoverflow.com/questions/44717164/unable-to-import-svg-files-in-typescript

import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Paths from "./constants/Paths";

import Header from "./components/molecules/Header";
import Navigation from "./components/organisms/Nagivation";
import Home from "./components/pages/Home";
import Wallet from "./components/pages/Wallet";

const HomePage = () => <Home />;
const WalletPage = () => <Wallet />;

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navigation />
      <Switch>
        <Route exact path={Paths.home} component={HomePage} />
        <Route path={Paths.wallet} component={WalletPage} />
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
