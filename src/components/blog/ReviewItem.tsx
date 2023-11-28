import styled from 'styled-components';
import empty from '../../assets/image/poster/empty_poster.png';
import { Review } from '../../types/review';
import getDateStr from '../../utils/getDateStr';
import CommentCount from '../common/CommentCount';
import LikeCount from '../common/LikeCount';
import Poster from '../common/Poster';
import Private from '../common/Private';
import RatedStar from '../common/RatedStar';
import Body3 from '../common/texts/Body3';
import Subtitle1 from '../common/texts/Subtitle1';
import KeywordList from './KeywordList';

const PRIVATE = 'PRIVATE';

function ReviewItem({ review }: { review: Review }) {
  const keywords = ['아이언맨', '블랙위도우', '뿡'];
  return (
    <ReviewItemWrapper>
      <Poster imgUrl={review.poster || empty} size={'m'} />
      <ReviewContent>
        <Subject>
          <Subtitle1>{review.subject}</Subtitle1>
        </Subject>
        <RatedStar star={review.star} />
        <KeywordList keywords={keywords} />
        <ReviewInfo>
          <Body3>{getDateStr(new Date(review.createdAt), '.')}</Body3>
          <ReviewStatics>
            <LikeCount count={review.likeCnt} />
            <CommentCount count={review.commentCnt || 0} />
            {review.scope === PRIVATE && <Private />}
          </ReviewStatics>
        </ReviewInfo>
      </ReviewContent>
    </ReviewItemWrapper>
  );
}

const ReviewItemWrapper = styled.div`
  display: flex;
  gap: 8px;
  padding: 20px 16px 12px 16px;

  border-radius: 8px;
  background: var(--dark-grey-100);
`;

const ReviewContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`;

const Subject = styled.div`
  width: 100%;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
`;

const ReviewInfo = styled.div`
  display: flex;
  justify-content: space-between;

  color: var(--dark-grey-700);
`;

const ReviewStatics = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;

export default ReviewItem;
