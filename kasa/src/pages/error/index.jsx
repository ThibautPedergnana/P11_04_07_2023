import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/style/colors";

const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 150px;
`;

const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ErrorNumber = styled.span`
  color: ${colors.primary};
  font-size: 15rem;
`;

const ErrorMessage = styled.p`
  color: ${colors.primary};
  font-size: 1.5rem;
`;

const HomeLink = styled(Link)`
  text-decoration: underline;
  color: ${colors.primary};
  margin-top: 10rem;
  transition: 0.3s transform;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

function Error() {
  return (
    <ErrorWrapper>
      <ErrorContainer>
        <ErrorNumber>404</ErrorNumber>
        <ErrorMessage>
          Oups! La page que vous demandez n'existe pas
        </ErrorMessage>
      </ErrorContainer>
      <HomeLink to="/">Retour à la page d'accueil</HomeLink>
    </ErrorWrapper>
  );
}

export default Error;
