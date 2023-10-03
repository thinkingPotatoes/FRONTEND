import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from '../api/apiController';
import CommentTopNav from '../components/reviewDetail/comment/ReviewCommentTopNav';
import { ReviewComment } from '../types/review';
import CommentBox from '../components/reviewDetail/comment/CommentBox';
import CommentInputForm from '../components/reviewDetail/comment/CommentInputForm';

export const POST_OPTION = {
  POST: 'POST',
  PUT: 'PUT',
  REPLY: 'REPLY',
};

const getSortedReviewList = (data: ReviewComment[]) => {
  const newSortedData: ReviewComment[] = [];
  data.forEach((comment) => {
    const isReply = comment.replyId !== undefined;
    const indexToInsert = isReply
      ? newSortedData.findIndex((item) => item.id === comment.replyId)
      : -1;
    const position = isReply ? indexToInsert + 1 : 0;
    newSortedData.splice(position, 0, comment);
  });
  return newSortedData;
};

function ReviewDetailComment() {
  const { id: articleId } = useParams<{ id: string }>();
  const [sortedData, setSortedData] = useState<ReviewComment[]>([]);
  const [updateData, setUpdateData] = useState<boolean>(false);
  const [commentCnt, setCommentCnt] = useState<number>(0);
  const [nowPostStatus, setNowPostStatus] = useState<string>(POST_OPTION.POST);
  const [nowCommentId, setNowCommentId] = useState<string>('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const fetchReviewDetailData = async () => {
      try {
        const response = await axios.get(`/comment/get/${articleId}`);
        const sortedData = getSortedReviewList(response.data.data.list);
        setSortedData(sortedData);
        setCommentCnt(response.data.data.totalCnt);
      } catch (error: any) {
        console.error('오류:', error.message);
      }
    };

    fetchReviewDetailData();
  }, [updateData]);

  return (
    <>
      <CommentTopNav commentCnt={commentCnt} />
      <CommentFrame>
        {commentCnt !== 0 &&
          sortedData.map((data, idx) => (
            <CommentBox
              key={idx}
              comment={data}
              inputRef={inputRef}
              setNowPostStatus={setNowPostStatus}
              setNowCommentId={setNowCommentId}
              setUpdateData={setUpdateData}
            />
          ))}
      </CommentFrame>
      <CommentInputForm
        reviewId={articleId}
        inputRef={inputRef}
        postCommentAction={nowPostStatus}
        commentId={nowCommentId}
        setNowPostStatus={setNowPostStatus}
        setUpdateData={setUpdateData}
      />
    </>
  );
}

const CommentFrame = styled.div`
  height: 80dvh;
  overflow-y: scroll;
`;

export default ReviewDetailComment;
