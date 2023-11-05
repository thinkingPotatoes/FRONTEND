import { useNavigate } from 'react-router-dom';
import { ReactComponent as BackArrowSvg } from '../../assets/image/icon/backArrow.svg';
import { ReactComponent as ShareSvg } from '../../assets/image/icon/share.svg';
import { styled } from 'styled-components';

interface Props {
  id: string;
  userId: string;
  blogDto:
    | {
        nickname: string;
        title: string;
      }
    | undefined;
}

const ReviewTopNav = ({ blogDto }: Props) => {
  const navigate = useNavigate();

  const handleLeftArrowClick = () => {
    navigate('/review-list');
  };
  return (
    <TopNavBar>
      <SvgWrapper>
        <BackArrowSvg onClick={handleLeftArrowClick} />
      </SvgWrapper>
      <div className="title">{blogDto?.title}</div>
      <SvgWrapper>
        <ShareSvg />
      </SvgWrapper>
    </TopNavBar>
  );
};

const TopNavBar = styled.div`
  position: relative;
  top: 0;
  display: flex;
  margin: 0 -20px;
  // width: 100%;
  height: 56px;
  align-items: center;
  gap: 10px;

  .title {
    flex: 1 0 0;
    font-size: 18px;
    color: var(--text-emphasize);
    font-weight: 600;
    text-align: center;
    letter-spacing: -0.09px;
  }
`;

const SvgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 44px;
`;

export default ReviewTopNav;
