import * as React from "react";
import { Link } from "react-router-dom";
import Paths from "../../constants/Paths";

function WalletManagement() {
  return (
    <React.Fragment>
      <p>Wallet Management Page</p>
      <br />
      <Link to={Paths.home}>Go to Wallet Management</Link>
    </React.Fragment>
  );
}

export default WalletManagement;
