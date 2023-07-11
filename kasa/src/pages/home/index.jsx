import styled from "styled-components";
import ContainerApp from "../../components/ContainerApp";
import logementsJson from "../../datas/logements.json";
import Banner from "../../components/banner/Banner";
import BannerImg from "../../assets/banner-list.png";
import Card from "../../components/card/Card";
import { useNavigate } from "react-router-dom";

const ListLocation = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ContainerCard = styled.div`
  display: flex;
  justify-content: space-evenly;
  border-radius: 25px;
  background: #f6f6f6;
  padding: 56px 50px;
  gap: 60px;
  flex-wrap: wrap;
`;

function Home() {
  const navigate = useNavigate();

  return (
    <ContainerApp>
      <ListLocation>
        <Banner title="Chez vous, partout et ailleurs" imgUrl={BannerImg} />
        <ContainerCard>
          {logementsJson.map((logement) => (
            <Card
              key={`card-list-${logement.id}`}
              item={logement}
              onClick={() => navigate("/detail/" + logement.id)}
            />
          ))}
        </ContainerCard>
      </ListLocation>
    </ContainerApp>
  );
}

export default Home;
