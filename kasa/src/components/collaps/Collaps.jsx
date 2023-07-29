import React, { useState } from "react";
import styled from "styled-components";
import ArrowSvg from "../../assets/svgs/ArrowSvg";

const CollapsContent = styled.div`
  max-height: 0px;
  overflow: hidden;
  border-radius: 5px;
  background: #f6f6f6;
  transition: 0.2s all ease-in;
  opacity: 0;
  padding: 30px;
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const CollapsArrow = styled.div`
  margin-right: 18px;
  transition: 0.2s transform ease-in;
`;

const CollapsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
  &.opened {
    ${CollapsArrow} {
      transform: rotate(180deg);
    }
    ${CollapsContent} {
      max-height: 500px;
      opacity: 1;
    }
  }
`;

const CollapsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  background: #ff6060;
  padding: 5px 0px 7px 18px;
  cursor: pointer;
`;
const CollapsTitle = styled.div`
  color: #fff;
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 142.6%;
`;

const CollapsDescription = styled.div`
  color: #ff6060;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  line-height: 142.6%;
  font-size: 24px;
`;

const CollapsList = styled.div`
  display: flex;
  flex-direction: column;
`;

const CollapsItem = styled.div`
  color: #ff6060;
  font-family: Montserrat;
  font-size: 24px;
`;

function Collaps({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CollapsContainer className={isOpen ? "opened" : ""}>
      <CollapsHeader onClick={() => setIsOpen(!isOpen)}>
        <CollapsTitle>{title}</CollapsTitle>
        <CollapsArrow>
          <ArrowSvg />
        </CollapsArrow>
      </CollapsHeader>
      <CollapsContent>
        {typeof description === "string" ? (
          <CollapsDescription>{description}</CollapsDescription>
        ) : (
          <CollapsList>
            {description.map((item, index) => (
              <CollapsItem key={"description-collaps-" + index}>
                {item}
              </CollapsItem>
            ))}
          </CollapsList>
        )}
      </CollapsContent>
    </CollapsContainer>
  );
}

export default Collaps;
