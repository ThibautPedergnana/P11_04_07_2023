import React from "react";
// import { useParams } from "react-router-dom";
import ContainerApp from "../../components/ContainerApp";
import Star1 from "../../assets/svgs/Star1";
import { styled } from "styled-components";

const StarsContainer = styled.div`
  width: "auto";
  gap: "5px";
`;

function Detail() {
  // const { id } = useParams();

  return (
    <ContainerApp>
      <StarsContainer>
        <Star1 />
      </StarsContainer>
    </ContainerApp>
  );
}

export default Detail;
