import * as React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import Colors from "../../constants/Colors";

type Props = {
  to: any;
  children?: any;
};

const StyledNavLink = styled(NavLink)`
  :link,
  :visited {
    background-color: ${Colors.action};
    color: ${Colors.white};
    padding: 14px 25px;
    text-align: center;
    text-decoration: none;
    display: flex;
  }

  &:hover,
  &:active,
  &.active {
    background-color: ${Colors.secondary};
  }
`;

function NavLinkComponent(props: Props) {
  return (
    <StyledNavLink exact to={props.to} {...props}>
      {props.children}
    </StyledNavLink>
  );
}

export default NavLinkComponent;
