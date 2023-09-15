import { useNavigate } from 'react-router-dom';
import { ReactComponent as BackArrowSvg } from '../../../assets/image/icon/backArrow.svg';
import { ReactComponent as MoreDotSvg } from '../../../assets/icon/moreDot.svg';
import { ReactComponent as LikeSvg } from '../../../assets/image/icon/heart.svg';
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
    <>
      <TopNavBar>
        <SvgWrapper>
          <BackArrowSvg onClick={handleLeftArrowClick} />
        </SvgWrapper>
        <div className="title">
          댓글 <span>{commentCnt}</span>
        </div>
      </TopNavBar>
      <CommentBox>
        <div className="commentInfo">
          <div className="writerInfo">
            <div className="nickname">Comment01</div>
            <div className="date">2023.12.25</div>
          </div>
          <MoreDotSvg />
        </div>

        <div className="text">저도 어제 이 영화 봤는데! 너무 공감되네요. 글 잘봤어요!</div>
        <div className="actingComment">
          <CommentLike>
            <LikeSvg />
            <span>마음</span>
          </CommentLike>
          <CommentReply>답글달기</CommentReply>
        </div>
      </CommentBox>
    </>
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

const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 20px 0 0;
  align-items: flex-start;
  gap: 4px;
  color: var(--text-default);
  font-size: 14px;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: -0.014px;

  .commentInfo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .date {
    color: var(--disabled);
    font-size: 12px;
    font-weight: 300;
    letter-spacing: -0.24px;
  }

  .text {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.016px;
  }

  .actingComment {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    font-weight: 500;
    line-height: 130%; /* 15.6px */
  }
`;

const CommentLike = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  span {
    margin-top: 1px;
  }
`;
const CommentReply = styled.div``;
export default CommentTopNav;
