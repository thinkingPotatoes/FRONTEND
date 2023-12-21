import { useNavigate } from 'react-router-dom';
import { ReactComponent as BackArrow } from '../../assets/image/icon/backArrow.svg';
import styled from 'styled-components';

function HeaderWithBack() {
  const navigate = useNavigate();

  const onClickGoBack = () => {
    navigate(-1);
  };

  return (
    <Header>
      <BackButton onClick={onClickGoBack}>
        <BackArrow />
      </BackButton>
    </Header>
  );
}

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 11.5px 0;
  height: 44px;
  margin-bottom: 24px;
`;

const BackButton = styled.button`
  position: absolute;
  left: 16px;
`;

export default HeaderWithBack;
