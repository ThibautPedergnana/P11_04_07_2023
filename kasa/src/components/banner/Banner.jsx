import React from "react";
import styled from "styled-components";

const BannerContainer = styled.div`
  height: 223px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 63px;
  @media (max-width: 375px) {
    margin-top: 0;
    height: 110px;
    align-items: normal;
    justify-content: normal;
  }
`;

const ImgBanner = styled.img`
  width: 100%;
  max-height: 230px;
  @media (max-width: 375px) {
    align-items: initial;
    object-fit: cover;
    border-radius: 15px;
  }
`;

const TextBanner = styled.h3`
  font-size: 48px;
  font-weight: 100;
  color: white;
  position: absolute;
  @media (max-width: 375px) {
    width: 67%;
    font-size: 24px;
    margin-left: 16px;
  }
`;

function Banner({ title, imgUrl }) {
  return (
    <BannerContainer>
      <ImgBanner src={imgUrl} />
      <TextBanner>{title}</TextBanner>
    </BannerContainer>
  );
}

export default Banner;
