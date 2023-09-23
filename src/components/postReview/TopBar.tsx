import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { ReactComponent as BackButton } from '../../assets/icon/angle-left-btn.svg';
import Subtitle2 from '../common/texts/Subtitle2';

function TopBar({
  onClick,
  disabled,
  text,
}: {
  onClick: () => void;
  disabled: boolean;
  text: string;
}) {
  const navigate = useNavigate();
  const handleGoBack = () => navigate(-1);

  return (
    <TopBarWrapper>
      <BackButtonWrapper>
        <BackButton onClick={handleGoBack} width={24} height={24} />
      </BackButtonWrapper>
      <PostButton disabled={disabled} onClick={onClick}>
        <Subtitle2>{text}</Subtitle2>
      </PostButton>
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

const PostButton = styled.button`
  padding: 20px 4px;
  color: ${(props) => (props.disabled ? 'var(--dark-grey-500)' : 'var(--main)')};
`;

export default TopBar;
