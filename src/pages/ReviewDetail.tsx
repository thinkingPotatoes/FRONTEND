import { useEffect, useState } from 'react';
import ReviewTopNav from '../components/reviewDetail/ReviewTopNav';
import ReviewContents from '../components/reviewDetail/ReviewContents';
import ReviewBottomNav from '../components/reviewDetail/ReviewBottomNav';
import { useParams } from 'react-router-dom';
import axios from '../api/apiController';
import { ReviewDetail } from '../types/review';

function ReviewDetail() {
  const { id } = useParams<{ id: string }>();
  const [reviewData, setReviewData] = useState<ReviewDetail | null>(null);

  useEffect(() => {
    const fetchPostDetailData = async () => {
      try {
        const response = await axios.get(`/filog/search/${id}`);
        setReviewData(response.data.data);
      } catch (error: any) {
        console.error('오류:', error.message);
      }
    };

    fetchPostDetailData();
  }, []);

  return (
    <>
      <ReviewTopNav
        id={reviewData?.id || ''}
        userId={reviewData?.userId || ''}
        blogDto={reviewData?.blogUserDto}
      />
      <ReviewContents data={reviewData} />
      <ReviewBottomNav
        id={reviewData?.id || ''}
        likeCnt={reviewData?.likeCnt || 0}
        commentCnt={reviewData?.commentCnt || 0}
      />
    </>
  );
}

export default ReviewDetail;
