import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Voltar = ({ url }) => {
  return (
    <PequenoLink to={url}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.0937 2.18125L14.7062 0.793751C14.1187 0.206249 13.1687 0.206249 12.5874 0.793751L0.437451 12.9375C-0.150049 13.525 -0.150049 14.475 0.437451 15.0563L12.5874 27.2063C13.1749 27.7938 14.1249 27.7938 14.7062 27.2063L16.0937 25.8188C16.6874 25.225 16.6749 24.2563 16.0687 23.675L8.53745 16.5H26.4999C27.3312 16.5 27.9999 15.8313 27.9999 15V13C27.9999 12.1688 27.3312 11.5 26.4999 11.5H8.53745L16.0687 4.325C16.6812 3.74375 16.6937 2.775 16.0937 2.18125Z"
          fill="white"
        />
      </svg>
    </PequenoLink>
  );
};
const PequenoLink = styled(Link)`
  display: flex;
  flex-direction: row;
  /* justify-content: flex-start; */
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 6%;
  svg {
    position: fixed;
    top:-60px;
    cursor:pointer;
  }
`;

export default Voltar;
