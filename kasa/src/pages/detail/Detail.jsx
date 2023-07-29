import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ContainerApp from "../../components/ContainerApp";
import ContainerPictures from "../../components/slider";
import Star1 from "../../assets/svgs/Star1";
import Star2 from "../../assets/svgs/Star2";
import Star3 from "../../assets/svgs/Star3";
import Star4 from "../../assets/svgs/Star4";
import Star5 from "../../assets/svgs/Star5";
import { styled } from "styled-components";
import logementsJson from "../../datas/logements.json";
import Collaps from "../../components/collaps/Collaps";
import { useNavigate } from "react-router-dom";
import colors from "../../utils/style/colors";

const StarsContainer = styled.div`
  width: 196px;
  height: 36px;
  margin-top: 20px;
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const HeaderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.primary};
  margin-top: 30px;
  margin-bottom: 25px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Title = styled.h2`
  font-weight: 100;
  margin-bottom: 0;
  font-size: 36px;
  margin-top: 0;
  @media (max-width: 768px) {
    font-weight: 500;
    font-size: 18px;
  }
`;

const Adress = styled.h2`
  font-weight: 100;
  margin-top: 5px;
  font-size: 18px;
  @media (max-width: 768px) {
    font-weight: 500;
    font-size: 14px;
  }
`;

const TagInfo = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
`;

const Tags = styled.span`
  display: flex;
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: 3px 30px 2px;
  border-radius: 12px;
  font-size: 16px;
`;

const RightInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 768px) {
    margin-top: 20px;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }
`;

const HostInfo = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;

const HostName = styled.h2`
  font-weight: 100;
  margin-right: 10px;
  font-size: 20px;
`;

const HostPic = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 100px;
`;

const CollapsInfo = styled.div`
  display: flex;
  gap: 76px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;

function Detail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const appt = logementsJson.find((appt) => appt.id === id);

  useEffect(() => {
    if (!appt) navigate("/404");
  }, [appt, navigate]);

  const getRatingStars = () => {
    switch (appt.rating) {
      case "1":
        return <Star1 />;
      case "2":
        return <Star2 />;
      case "3":
        return <Star3 />;
      case "4":
        return <Star4 />;
      case "5":
        return <Star5 />;
      default:
        return null;
    }
  };
  return (
    <ContainerApp>
      {appt && (
        <>
          <ContainerPictures pictures={appt.pictures || []} />
          <HeaderInfo>
            <LeftInfo>
              <Title>{appt.title}</Title>
              <Adress>{appt.location}</Adress>
              <TagInfo>
                {appt.tags.map((tag, index) => (
                  <Tags key={"appt-tags-" + index}>{tag}</Tags>
                ))}
              </TagInfo>
            </LeftInfo>
            <RightInfo>
              <HostInfo>
                <HostName>{appt.host.name}</HostName>
                <HostPic src={appt.host.picture} alt="" />
              </HostInfo>
              <StarsContainer>{getRatingStars()}</StarsContainer>
            </RightInfo>
          </HeaderInfo>
          <CollapsInfo>
            <Collaps title="Description" description={appt.description} />
            <Collaps title="Equipements" description={appt.equipments} />
          </CollapsInfo>
        </>
      )}
    </ContainerApp>
  );
}

export default Detail;
