import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { ReactComponent as BackButton } from '../../assets/icon/angle-left-btn.svg';

function TopBar() {
  const navigate = useNavigate();
  const handleGoBack = () => navigate(-1);

  return (
    <TopBarWrapper>
      <BackButtonWrapper>
        <BackButton onClick={handleGoBack} width={24} height={24} />
      </BackButtonWrapper>
    </TopBarWrapper>
  );
}

const TopBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  margin: 0 -20px;
`;

const BackButtonWrapper = styled.div`
  padding: 0px 8px;
`;

export default TopBar;
