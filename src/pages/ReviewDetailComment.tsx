import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api/apiController';
import CommentTopNav from '../components/reviewDetail/comment/ReviewCommentTopNav';

function ReviewDetailComment() {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <CommentTopNav commentCnt={6} />
    </>
  );
}

export default ReviewDetailComment;
