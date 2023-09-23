import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api/apiController';
import CommentTopNav from '../components/reviewDetail/comment/ReviewCommentTopNav';
import { ReviewComment } from '../components/types/review';
import CommentBox from '../components/reviewDetail/comment/CommentBox';
import CommentInputForm from '../components/reviewDetail/comment/CommentInputForm';
import styled from 'styled-components';

const getSortedReviewList = (data: ReviewComment[]) => {
  const newSortedData: ReviewComment[] = [];
  data.forEach((comment) => {
    if (comment.replyId) {
      const indexToInsert = newSortedData.findIndex((item) => item.id === comment.replyId);
      if (indexToInsert !== -1) {
        // 찾은 경우
        newSortedData.splice(indexToInsert + 1, 0, comment);
      } else {
        // 찾지 못한 경우, 그냥 배열 끝에 추가
        newSortedData.push(comment);
      }
    } else {
      // replyId가 없는 경우, 그냥 배열 끝에 추가
      newSortedData.push(comment);
    }
  });
  return newSortedData;
};

function ReviewDetailComment() {
  const { id } = useParams<{ id: string }>();
  const [sortedData, setSortedData] = useState<ReviewComment[]>([]);
  const [updateData, setUpdateData] = useState<boolean>(false);
  const [commentCnt, setCommentCnt] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const fetchReviewDetailData = async () => {
      try {
        const response = await axios.get(`/comment/get/${id}`);
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
            <CommentBox key={idx} comment={data} inputRef={inputRef} />
          ))}
      </CommentFrame>
      <CommentInputForm reviewId={id} setUpdateData={setUpdateData} inputRef={inputRef} />
    </>
  );
}

const CommentFrame = styled.div`
  height: 80dvh;
  overflow-y: scroll;
`;

export default ReviewDetailComment;
