// Big ol' TODO

import * as React from "react";
import styled from "styled-components";
import Colors from "../../constants/Colors";

import { useWalletContext } from "../../context/WalletContext";
import { IoMdLeaf } from "react-icons/io";

const SendTxButton = styled.button`
  display: flex;
  align-items: center;
  padding: 8px;
  color: ${Colors.pureWhite};
  cursor: pointer;
  margin-right: 24px;
  min-width: 5%;
  background-color: #85bb65;
  border-radius: 4px;
  border: none;
  margin-top: 24px;

  &:hover {
    background-color: ${Colors.main};
  }

  &:disabled {
    cursor: default;
    background-color: gray;
  }
`;

function AccountTransactionForm() {
  const { latestWallet, activeAccount } = useWalletContext();
  const [txAmount, setTxAmount] = React.useState(0);

  return latestWallet && activeAccount ? (
    <React.Fragment>
      <p
        style={{
          marginTop: "24px",
          fontSize: "18px"
        }}
      >
        Mint Libra (LBR)
      </p>
      <div
        style={{
          display: "flex",
          marginTop: "4px",
          border: `2px solid ${Colors.black}`,
          padding: "12px",
          borderRadius: "4px",
          alignItems: "center"
        }}
      >
        <div style={{ margin: "12px" }}>
          <p>Amount:</p>
          <input
            value={txAmount || 0}
            onChange={e => setTxAmount(parseInt(e.target.value))}
            type="number"
            style={{
              resize: "none",
              borderRadius: "5px",
              borderWidth: "2px",
              borderColor: Colors.action,
              borderStyle: "solid",
              marginTop: "12px",
              padding: "8px"
            }}
          />
        </div>
        <div>
          <SendTxButton disabled={!txAmount || txAmount < 0} onClick={() => {}}>
            <h2 style={{ marginRight: "8px" }}>Mint</h2>{" "}
            <IoMdLeaf size="36px" />
          </SendTxButton>
        </div>
      </div>
    </React.Fragment>
  ) : null;
}

export default AccountTransactionForm;
