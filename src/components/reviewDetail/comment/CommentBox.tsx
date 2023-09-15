import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as MoreDotSvg } from '../../../assets/icon/moreDot.svg';
import { ReactComponent as LikeSvg } from '../../../assets/image/icon/heart.svg';
import { ReactComponent as FillLikeSvg } from '../../../assets/image/icon/fillHeart.svg';
import { ReviewComment } from '../../types/review';

interface Props {
  comment: ReviewComment;
}

const CommentBox = ({ comment }: Props) => {
  const [likeCnt, setLikeCnt] = useState(comment.likeCnt);
  const [isLike, setLike] = useState(comment.likeCnt > 0);

  const handleLikeClick = () => {
    if (isLike) {
      setLike(false);
      setLikeCnt(likeCnt - 1);
    } else {
      setLike(true);
      setLikeCnt(likeCnt + 1);
    }
  };
  return (
    <EachBox>
      <div className="commentInfo">
        <div className="writerInfo">
          <div className="nickname">{comment.nickname}</div>
          <div className="date">{comment.date}</div>
        </div>
        <MoreDotSvg />
      </div>

      <div className="text">{comment.contents}</div>
      <div className="actingComment" onClick={handleLikeClick}>
        {likeCnt > 0 ? (
          <>
            <CommentLike>
              <FillLikeSvg />
              <span className="fill">마음 {likeCnt}개</span>
            </CommentLike>
            <CommentReply>답글달기</CommentReply>
          </>
        ) : (
          <>
            <CommentLike>
              <LikeSvg />
              <span>마음</span>
            </CommentLike>
            <CommentReply>답글달기</CommentReply>
          </>
        )}
      </div>
    </EachBox>
  );
};

const EachBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 20px 16px 0;
  align-items: flex-start;
  gap: 4px;
  border-bottom: 1px solid var(--dark-grey-100);
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
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  line-height: 130%; /* 15.6px */

  span {
    margin-top: 1px;
  }

  .fill {
    color: var(--main);
  }
`;
const CommentReply = styled.div``;

export default CommentBox;
