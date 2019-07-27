import * as React from "react";
import styled, { keyframes } from "styled-components";

const GlowKeyframes = keyframes`
    0%{background-position:51% 0%}
    50%{background-position:50% 100%}
    100%{background-position:51% 0%}
`;
const GradientContainerDiv = styled.div`
  background: linear-gradient(0deg, #1496cc, #ff5240);
  background-size: 400% 400%;
  animation: ${GlowKeyframes} 15s ease infinite;
`;

type Props = {
  className?: string;
  children?: any;
};

function GradientContainer(props: Props) {
  return (
    <GradientContainerDiv className={props.className}>
      {props.children}
    </GradientContainerDiv>
  );
}

export default GradientContainer;
