import styled from 'styled-components';
import { Review } from '../../types/review';
import ReviewItem from './ReviewItem';

function ReviewList({
  reviewList,
  endRef,
}: {
  reviewList: Review[];
  endRef: (node?: Element | null | undefined) => void;
}) {
  return (
    <ReviewListWrapper>
      {reviewList.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
      <div ref={endRef} />
    </ReviewListWrapper>
  );
}

const ReviewListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export default ReviewList;
