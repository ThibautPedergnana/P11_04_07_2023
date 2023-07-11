import React from "react";
import styled from "styled-components";

const BannerContainer = styled.div`
  height: 223px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 63px;
`;

const ImgBanner = styled.img`
  width: 100%;
`;

const TextBanner = styled.h3`
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  color: white;
  position: absolute;
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
