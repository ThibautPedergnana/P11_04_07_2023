import ContainerApp from "../../components/ContainerApp";
import Banner from "../../components/banner/Banner";
import BannerAboutImg from "../../assets/banner-about.png";
import styled from "styled-components";
import Collaps from "../../components/collaps/Collaps";
import aboutJson from "../../datas/about.json";

const ContainerAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 31px;
  margin-top: 40px;
`;

function About() {
  return (
    <ContainerApp>
      <Banner title="" imgUrl={BannerAboutImg} />
      <ContainerAbout>
        {aboutJson.map(({ title, description }, index) => (
          <Collaps
            key={"about-collaps" + index}
            title={title}
            description={description}
            isLong={index === 4}
          />
        ))}
      </ContainerAbout>
    </ContainerApp>
  );
}

export default About;
