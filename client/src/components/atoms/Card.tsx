import * as React from "react";
import styled from "styled-components";
import StyleStrings from "../../constants/StyleStrings";
import Colors from "../../constants/Colors";

const StyledDiv = styled.div`
  padding: 24px;
  margin: 24px;
  border-radius: 5px;
  ${StyleStrings.boxShadow};
  background-color: ${Colors.pureWhite};
`;

type Props = {
  children?: any;
};

function Card(props: Props) {
  return <StyledDiv>{props.children}</StyledDiv>;
}

export default Card;
