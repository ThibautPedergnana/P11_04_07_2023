import React from "react";
import styled from "styled-components";

const CardLocation = styled.div`
  width: 340px;
  height: 340px;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: end;
  cursor: pointer;
  transition: 0.3s transform ease-in;
  &:hover {
    transform: scale(1.1);
  }
`;

const TitleCard = styled.span`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  position: absolute;
  padding: 20px;
`;

const ImgCard = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;

function Card({ item, onClick }) {
  return (
    <CardLocation onClick={onClick}>
      <ImgCard src={item.cover} />
      <TitleCard>{item.title}</TitleCard>
    </CardLocation>
  );
}

export default Card;
