import React from 'react';
import ReviewTopNav from '../components/reviewDetail/ReviewTopNav';
import ReviewContents from '../components/reviewDetail/ReviewContents';
import ReviewBottomNav from '../components/reviewDetail/ReviewBottomNav';

function ReviewDetail() {
  return (
    <>
      <ReviewTopNav />
      <ReviewContents />

      <ReviewBottomNav />
    </>
  );
}

export default ReviewDetail;
