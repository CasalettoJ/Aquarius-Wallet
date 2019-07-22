import * as React from "react";
import styled from "styled-components";
import Colors from "../../constants/Colors";

const TitleContainer = styled.div`
  background-color: ${Colors.main};
`;

const Title = styled.h1`
  font-family: "Josefin Sans", sans-serif;
  font-weight: 100;
  color: white;
  text-align: center;
  font-size: 48px;
  padding-top: 24px;
  padding-bottom: 24px;
`;

function Header() {
  return (
    <TitleContainer>
      <Title>Aquarius Lite</Title>
    </TitleContainer>
  );
}

export default Header;
