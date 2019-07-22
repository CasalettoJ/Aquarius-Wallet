import * as React from "react";
import styled from "styled-components";
import {
  IoMdAnalytics,
  IoMdWallet,
  IoMdInformationCircle
} from "react-icons/io";

import Colors from "../../constants/Colors";
import Paths from "../../constants/Paths";
import StyleStrings from "../../constants/StyleStrings";

import NavLink from "../atoms/NavLink";

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  background-color: ${Colors.pureWhite};
  ${StyleStrings.boxShadow};
  padding: 12px;
  margin-bottom: 48px;
`;

const AlignedIcons = styled.div`
  display: flex;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
`;

const StyledLabel = styled.span`
  font-size: 16px;
  padding-left: 12px;
  padding-top: 4px;
`;

function Navigation() {
  return (
    <NavigationContainer>
      <AlignedIcons>
        <StyledNavLink to={Paths.home}>
          <IoMdAnalytics size={"1.2em"} />{" "}
          <StyledLabel>Libra Network</StyledLabel>
        </StyledNavLink>
      </AlignedIcons>

      <AlignedIcons>
        <StyledNavLink to={Paths.wallet}>
          <IoMdWallet size={"1.2em"} /> <StyledLabel>Wallet</StyledLabel>
        </StyledNavLink>
      </AlignedIcons>
      <AlignedIcons>
        <StyledNavLink to={Paths.about}>
          <IoMdInformationCircle size={"1.2em"} />
          <StyledLabel>About</StyledLabel>
        </StyledNavLink>
      </AlignedIcons>
    </NavigationContainer>
  );
}

export default Navigation;
