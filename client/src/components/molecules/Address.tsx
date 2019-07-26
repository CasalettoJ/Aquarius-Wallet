import * as React from "react";
import styled from "styled-components";
var QRCode = require("qrcode.react");

import Colors from "../../constants/Colors";
import Card from "../atoms/Card";

type Props = {
  depth: number;
  address: string;
};

function Address(props: Props) {
  return (
    <Card>
      {/* <p>Address: {props.depth + 1}</p> */}
      <QRCode
        includeMargin
        value={props.address}
        fgColor={Colors.main}
        size={128}
      />
    </Card>
  );
}

export default Address;
