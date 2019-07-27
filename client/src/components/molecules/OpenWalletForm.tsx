import * as React from "react";
import styled from "styled-components";
import Colors from "../../constants/Colors";

import { useWalletContext } from "../../context/WalletContext";
import { IoMdWallet } from "react-icons/io";

const OpenWalletButton = styled.button`
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
`;

function WalletControls() {
  const { createWallet, importWallet, latestWallet } = useWalletContext();
  const [salt, setSalt] = React.useState<string>("LIBRA"); // TODO: Set this in a constant somewhere
  const [phrase, setPhrase] = React.useState<string>("");

  return !latestWallet ? (
    <React.Fragment>
      <div>
        <p>Wallet Password:</p>
        <input
          value={salt || "LIBRA"}
          onChange={e => setSalt(e.target.value)}
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
      <div style={{ marginTop: "24px" }}>
        <p>Import Key (Optional)</p>
        <textarea
          value={phrase}
          onChange={e => setPhrase(e.target.value)}
          style={{
            resize: "none",
            borderRadius: "5px",
            borderWidth: "2px",
            borderColor: Colors.action,
            marginTop: "12px",
            padding: "8px"
          }}
          rows={5}
          cols={35}
          placeholder="Optional"
        />
      </div>
      <OpenWalletButton
        onClick={async () => {
          !phrase ? await createWallet(salt) : await importWallet(phrase, salt);
          setPhrase("");
        }}
      >
        <h2>Open Wallet</h2> <IoMdWallet size="36px" />
      </OpenWalletButton>
    </React.Fragment>
  ) : null;
}

export default WalletControls;
