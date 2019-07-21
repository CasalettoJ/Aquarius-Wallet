import * as React from "react";
import { Link } from "react-router-dom";
import Paths from "../../constants/Paths";

function Home() {
  return (
    <React.Fragment>
      <p>Home Page</p>
      <br />
      <Link to={Paths.walletManagement}>Go to Wallet Management Page</Link>
    </React.Fragment>
  );
}

export default Home;
