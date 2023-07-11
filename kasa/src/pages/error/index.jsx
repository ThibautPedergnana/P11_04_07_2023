import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/style/colors";

const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
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
  text-decoration: none;
  color: ${colors.primary};
  margin-top: 10rem;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
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
