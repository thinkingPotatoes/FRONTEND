import { styled } from 'styled-components';
import { ReactComponent as Caution } from '../../assets/image/icon/exclamationCircle.svg';

import { Review } from '../../types/review.ts';
import getDateStr from '../../utils/getDateStr.ts';
import CommentCount from '../common/CommentCount.tsx';
import LikeCount from '../common/LikeCount.tsx';
import RatedStar from '../common/RatedStar.tsx';
import Body3 from '../common/texts/Body3.ts';

function ReviewItem({ review }: { review: Review }) {
  return (
    <ReviewItemWrapper>
      <Title>{review.subject}</Title>
      <RatedStar star={review.star} />
      <Content>{review.content}</Content>
      <Info>
        <CreatedAt>{getDateStr(new Date(review.createdAt), '.')}</CreatedAt>
        <Reactions>
          <LikeCount count={review.likeCnt} />
          <CommentCount count={review.commentCnt || 0} />
          {review.spoiler && (
            <Spoiler>
              <Caution width={16} height={16} fill="#F15757" />
              <Body3>스포주의</Body3>
            </Spoiler>
          )}
        </Reactions>
      </Info>
    </ReviewItemWrapper>
  );
}

const ReviewItemWrapper = styled.div`
  display: flex;
  padding: 20px 16px 12px 16px;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;

  border-radius: 8px;
  background: var(--dark-grey-100, #2c2c35);
`;

const Spoiler = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  color: #f15757;
`;

const Title = styled.div`
  overflow: hidden;
  color: var(--dark-grey-800, #e4e4e5);
  text-overflow: ellipsis;

  /* Head3 */
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500; // 100 낮춘거
  line-height: normal;
  letter-spacing: -0.09px;
`;

const Content = styled.div`
  white-space: normal;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  width: 100%;
  overflow: hidden;
  color: var(--dark-grey-700, #c3c3c6);
  text-overflow: ellipsis;

  /* Body2 */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 18.2px */
  letter-spacing: -0.014px;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

const CreatedAt = styled.div`
  overflow: hidden;
  color: var(--dark-grey-700, #c3c3c6);
  text-overflow: ellipsis;

  /* Body3 */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 15.6px */
`;

const Reactions = styled.div`
  display: flex;
  gap: 12px;
`;

export default ReviewItem;
