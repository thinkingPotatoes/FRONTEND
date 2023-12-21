import { useNavigate } from 'react-router-dom';
import { ReactComponent as BackArrow } from '../../assets/image/icon/backArrow.svg';
import styled from 'styled-components';

function HeaderWithBackForModif() {
  const navigate = useNavigate();

  const onClickGoBack = () => {
    if (confirm('화면을 나가시겠어요? 화면을 나가면 저장하지 않은 내용이 사라져요.')) {
      navigate(-1);
    }
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

export default HeaderWithBackForModif;
