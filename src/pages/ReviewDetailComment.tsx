import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentTopNav from '../components/reviewDetail/comment/ReviewCommentTopNav';
import { ReviewComment } from '../components/types/review';
import CommentBox from '../components/reviewDetail/comment/CommentBox';
import CommentInputForm from '../components/reviewDetail/comment/CommentInputForm';
const dummyData: ReviewComment[] = [
  {
    id: '1',
    contents: '저도 어제 이 영화 봤는데! 너무 공감되네요. 글 잘봤어요!',
    date: '2023.12.25',
    likeCnt: 0,
    nickname: 'Comment01',
    replyId: '',
    userId: '123',
  },
  {
    id: '2',
    contents: '저도 어제 이 영화 봤는데! 너무 공감되네요. 글 잘봤어요!',
    date: '2023.12.25',
    likeCnt: 2,
    nickname: 'Comment02',
    replyId: '',
    userId: '456',
  },
  {
    id: '3',
    contents: '저도 어제 이 영화 봤는데! 너무 공감되네요. 글 잘봤어요!',
    date: '2023.12.25',
    likeCnt: 0,
    nickname: 'Comment03',
    replyId: '2',
    userId: '789',
  },
  {
    id: '4',
    contents: '저도 어제 이 영화 봤는데! 너무 공감되네요. 글 잘봤어요!',
    date: '2023.12.25',
    likeCnt: 0,
    nickname: 'Comment04',
    replyId: '1',
    userId: '123',
  },
];

function ReviewDetailComment() {
  const { id } = useParams<{ id: string }>();
  const [sortedDummyData, setSortedDummyData] = useState<ReviewComment[]>([]);

  useEffect(() => {
    //replyId에 따라 재정렬
    const newSortedDummyData: ReviewComment[] = [];

    dummyData.forEach((comment) => {
      if (comment.replyId) {
        const indexToInsert = newSortedDummyData.findIndex((item) => item.id === comment.replyId);
        if (indexToInsert !== -1) {
          // 찾은 경우
          newSortedDummyData.splice(indexToInsert + 1, 0, comment);
        } else {
          // 찾지 못한 경우, 그냥 배열 끝에 추가
          newSortedDummyData.push(comment);
        }
      } else {
        // replyId가 없는 경우, 그냥 배열 끝에 추가
        newSortedDummyData.push(comment);
      }
    });

    setSortedDummyData(newSortedDummyData);
  }, []);
  return (
    <>
      <CommentTopNav commentCnt={dummyData.length} />
      {sortedDummyData.length !== 0 && sortedDummyData.map((data) => <CommentBox comment={data} />)}
      <CommentInputForm reviewId={id} />
    </>
  );
}

export default ReviewDetailComment;
