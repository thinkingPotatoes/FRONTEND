import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { ReactComponent as BackIcon } from '../../assets/image/icon/backArrow.svg';

function TopBar() {
  const navigate = useNavigate();
  return (
    <TopBarWrapper>
      <IconWrapper>
        <BackIcon onClick={() => navigate(-1)} />
      </IconWrapper>
    </TopBarWrapper>
  );
}

const TopBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  padding: 6px 8px 6px 0px;
  z-index: 100;
  background: #111213;
`;

const IconWrapper = styled.div`
  display: flex;
  width: 44px;
  height: 44px;
  justify-content: center;
  align-items: center;
`;

export default TopBar;
