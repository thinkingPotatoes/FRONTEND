import { useNavigate } from 'react-router-dom';
import { ReactComponent as BackArrowSvg } from '../../../assets/image/icon/backArrow.svg';
import { styled } from 'styled-components';

interface Props {
  commentCnt: number;
}

const CommentTopNav = ({ commentCnt }: Props) => {
  const navigate = useNavigate();

  const handleLeftArrowClick = () => {
    navigate(-1);
  };
  return (
    <TopNavBar>
      <SvgWrapper>
        <BackArrowSvg onClick={handleLeftArrowClick} />
      </SvgWrapper>
      <div className="title">
        댓글 <span>{commentCnt}</span>
      </div>
    </TopNavBar>
  );
};

const TopNavBar = styled.div`
  position: relative;
  display: flex;
  margin: 0 -20px;
  height: 56px;
  align-items: center;
  gap: 32%;
  .title {
    display: flex;
    font-size: 18px;
    color: var(--text-emphasize);
    font-weight: 600;
    text-align: center;
    letter-spacing: -0.09px;

    span {
      margin-left: 5px;
      color: var(--main);
    }
  }
`;

const SvgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 44px;
  cursor: pointer;
`;

export default CommentTopNav;
