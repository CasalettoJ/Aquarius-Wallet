// Big ol' TODO

import * as React from "react";
import styled from "styled-components";
import Colors from "../../constants/Colors";

import { useWalletContext } from "../../context/WalletContext";
import { IoMdSend } from "react-icons/io";

const SendTxButton = styled.button`
  display: flex;
  align-items: center;
  padding: 8px;
  color: ${Colors.action};
  cursor: pointer;
  margin-right: 24px;
  min-width: 5%;
  background-color: transparent;
  border: none;
  margin-top: 24px;

  &:hover {
    color: ${Colors.secondary};
  }

  &:disabled {
    cursor: default;
    color: gray;
  }
`;

function AccountTransactionForm() {
  const { latestWallet, activeAccount } = useWalletContext();
  const [txAmount, setTxAmount] = React.useState(0);
  const [targetAddress, setTargetAddress] = React.useState("");

  return latestWallet && activeAccount ? (
    <React.Fragment>
      <p
        style={{
          marginTop: "24px",
          fontSize: "18px"
        }}
      >
        Send Transaction
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

        <div style={{ margin: "12px" }}>
          <p>Recipient:</p>
          <input
            value={targetAddress}
            placeholder="Libra Address"
            onChange={e => setTargetAddress(e.target.value)}
            type="text"
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
          <SendTxButton
            disabled={!targetAddress || !txAmount || txAmount < 0}
            onClick={() => {}}
          >
            {" "}
            {/* TODO WHEN DOING TX -- ADDRESS VALIDATION */}
            <h2 style={{ marginRight: "8px" }}>Send</h2>{" "}
            <IoMdSend size="36px" />
          </SendTxButton>
        </div>
      </div>
    </React.Fragment>
  ) : null;
}

export default AccountTransactionForm;
