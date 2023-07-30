import React from "react";
import { styled } from "styled-components";

const NextArrowSvg = styled.svg`
  position: absolute;
  right: 0;
  margin-right: 15px;
  cursor: pointer;
  @media (max-width: 375px) {
    width: 12px;
  }
`;

function NextArrow(props) {
  return (
    <NextArrowSvg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="80"
      viewBox="0 0 48 80"
      fill="none"
      {...props}
    >
      <path
        d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
        fill="white"
      />
    </NextArrowSvg>
  );
}

export default NextArrow;
