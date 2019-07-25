// Specific component not intended for styling extensions.

import * as React from "react";
import styled from "styled-components";

const ErrorTextSttyle = styled.p`
  font-weight: 300;
  font-size: 16px;
  color: #d8000c;
`;

type Props = {
  children?: any;
};

function ErrorText(props: Props) {
  return <ErrorTextSttyle>{props.children}</ErrorTextSttyle>;
}

export default ErrorText;
