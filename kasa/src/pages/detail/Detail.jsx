import React from "react";
// import { useParams } from "react-router-dom";
import ContainerApp from "../../components/ContainerApp";
import Star1 from "../../assets/svgs/Star1";

function Detail() {
  // const { id } = useParams();

  return (
    <ContainerApp>
      <div
        className="ratings"
        style={{
          width: "auto",
          gap: "5px",
        }}
      >
        <Star1 />
      </div>
    </ContainerApp>
  );
}

export default Detail;
