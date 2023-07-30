import styled from "styled-components";
import ContainerApp from "../../components/ContainerApp";
import logementsJson from "../../datas/logements.json";
import Banner from "../../components/banner/Banner";
import BannerImg from "../../assets/banner-list.png";
import Card from "../../components/card/Card";
import { useNavigate } from "react-router-dom";

const ListLocation = styled.div.attrs({ className: "ListLoc" })`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ContainerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  justify-content: space-evenly;
  border-radius: 25px;
  background: #f6f6f6;
  padding: 56px 50px;
  margin-top: 43px;
  @media (max-width: 375px) {
    margin-top: 22px;
    background: 0;
    padding: 0;
    gap: 22px;
  }
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
