import { RefObject, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as ChildSvg } from '../../../assets/icon/child-arrow.svg';
import { ReactComponent as LikeSvg } from '../../../assets/image/icon/heart.svg';
import { ReactComponent as FillLikeSvg } from '../../../assets/image/icon/fillHeart.svg';
import { ReviewComment } from '../../types/review';
import CommentModalBtn from './CommentModalBtn';
import { POST_OPTION } from '../../../pages/ReviewDetailComment';

interface Props {
  comment: ReviewComment;
  inputRef: RefObject<HTMLInputElement>;
  setNowCommentId: React.Dispatch<React.SetStateAction<string>>;
  setNowPostStatus: React.Dispatch<React.SetStateAction<string>>;
  setUpdateData: React.Dispatch<React.SetStateAction<boolean>>;
}

const CommentBox = ({
  comment,
  inputRef,
  setNowCommentId,
  setNowPostStatus,
  setUpdateData,
}: Props) => {
  const [likeCnt, setLikeCnt] = useState(comment.likeCnt ? comment.likeCnt : 0);
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
  const handleReplyClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      setNowPostStatus(POST_OPTION.REPLY);
    }
  };

  const likeCountElement =
    likeCnt > 0 ? (
      <CommentLike onClick={handleLikeClick}>
        <FillLikeSvg />
        <span className="fill">마음 {likeCnt}개</span>
      </CommentLike>
    ) : (
      <CommentLike onClick={handleLikeClick}>
        <LikeSvg />
        <span>마음</span>
      </CommentLike>
    );

  if (!comment.replyId || comment.replyId.length === 0) {
    return (
      <EachBox>
        <div className="commentInfo">
          <div className="writerInfo">
            <div className="nickname">{comment.nickname ? comment.nickname : 'NO NICKNAME'}</div>
            <div className="date">{comment.updatedAt.split('T')[0]}</div>
          </div>
          <CommentModalBtn
            comment={comment}
            inputRef={inputRef}
            setNowPostStatus={setNowPostStatus}
            setNowCommentId={setNowCommentId}
            setUpdateData={setUpdateData}
          />
        </div>

        <div className="text">{comment.content}</div>
        <div className="actingComment">
          {likeCountElement}
          <CommentReply onClick={handleReplyClick}>답글달기</CommentReply>
        </div>
      </EachBox>
    );
  }
  return (
    <EachBox>
      <div className="commentInfo">
        <div className="subcomment">
          <ChildSvg />
          <div className="writerInfo">
            <div className="nickname">{comment.nickname ? comment.nickname : 'NO NICKNAME'}</div>
            <div className="date">{comment.updatedAt.split('T')[0]}</div>
          </div>
        </div>
        <CommentModalBtn
          comment={comment}
          inputRef={inputRef}
          setNowPostStatus={setNowPostStatus}
          setNowCommentId={setNowCommentId}
          setUpdateData={setUpdateData}
        />
      </div>

      <div className="subtext">{comment.content}</div>
    </EachBox>
  );
};

const EachBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 0;
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

    .subcomment {
      display: flex;
    }
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

  .subtext {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.016px;
    margin-left: 25px;
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
    margin-top: 2px;
  }

  .fill {
    color: var(--main);
  }
`;
const CommentReply = styled.div`
  margin-top: 2px;
  cursor: pointer;
`;

export default CommentBox;
