import * as React from "react";
import styled from "styled-components";

import Address from "../molecules/Address";
import { useWalletContext } from "../../context/WalletContext";
import Colors from "../../constants/Colors";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

type Props = {
  itemsPerPage: number;
};

const PageButton = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
  color: ${Colors.action};
  padding: 12px;

  :hover {
    color: ${Colors.secondary};
  }

  :disabled {
    cursor: default;
    color: gray;
  }
`;

function Addresses(props: Props) {
  const { latestWallet } = useWalletContext(); // TODO: Error handling
  const [pageNum, setPageNum] = React.useState(0);
  const addressCount = latestWallet
    ? Object.keys(latestWallet.addresses).length
    : 0;

  return latestWallet ? (
    <Container>
      <p style={{ marginBottom: "4px", textAlign: "center" }}>
        Accounts: {addressCount}
      </p>
      <p
        style={{
          marginBottom: "12px",
          marginTop: "4px",
          textAlign: "center"
        }}
      >
        Showing: {pageNum * props.itemsPerPage} -{" "}
        {pageNum * props.itemsPerPage + props.itemsPerPage > addressCount
          ? addressCount
          : pageNum * props.itemsPerPage + props.itemsPerPage}
      </p>
      <div
        style={{
          borderRadius: "4px",
          border: `2px solid ${Colors.black}`,
          padding: "8px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "250px"
        }}
      >
        {Object.keys(latestWallet.addresses)
          .slice(
            pageNum * props.itemsPerPage,
            pageNum * props.itemsPerPage + props.itemsPerPage
          )
          .map((address, i) => {
            const realDepth = pageNum * props.itemsPerPage + i;
            return (
              <Address
                key={`${realDepth};${address}`}
                depth={realDepth}
                address={address}
              />
            );
          })}
      </div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "4px",
            border: `2px solid ${Colors.black}`,
            padding: "8px",
            marginTop: "12px"
          }}
        >
          <PageButton
            disabled={pageNum <= 0}
            onClick={() => setPageNum(pageNum - 1)}
          >
            Last Page
          </PageButton>
          <span>Page {pageNum}</span>
          <PageButton
            disabled={(pageNum + 1) * props.itemsPerPage >= addressCount}
            onClick={() => setPageNum(pageNum + 1)}
          >
            Next Page
          </PageButton>
        </div>
      </div>
    </Container>
  ) : null;
}

export default Addresses;
