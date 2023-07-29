import React, { useState } from "react";
import { styled } from "styled-components";
import PrevArrow from "../../assets/svgs/PrevArrow";
import NextArrow from "../../assets/svgs/NextArrow";
import colors from "../../utils/style/colors";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const SliderContainer = styled.div`
  width: 100%;
  height: 415px;
  position: relative;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    height: 255px;
  }
`;

const ImgSlider = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;

const ImgCount = styled.div`
  position: absolute;
  bottom: 0;
  color: ${colors.white};
  margin-bottom: 40px;
  font-weight: lighter;
`;

function ContainerPictures({ pictures }) {
  const [indexPicture, setIndexPicture] = useState(0);

  const changeIndexPicture = (newIndex) => {
    if (newIndex < 0) newIndex = pictures.length - 1;
    else if (newIndex > pictures.length - 1) newIndex = 0;

    setIndexPicture(newIndex);
  };

  return (
    <Container>
      <SliderContainer>
        {pictures.length > 1 && (
          <PrevArrow onClick={() => changeIndexPicture(indexPicture - 1)} />
        )}
        <ImgSlider src={pictures[indexPicture]} alt="" />
        {pictures.length > 1 && (
          <NextArrow onClick={() => changeIndexPicture(indexPicture + 1)} />
        )}
      </SliderContainer>
      <ImgCount>
        {indexPicture + 1}/{pictures.length}
      </ImgCount>
    </Container>
  );
}

export default ContainerPictures;
