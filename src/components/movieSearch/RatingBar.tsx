import { styled } from 'styled-components';

type Props = {
  ratingExpect: number;
  ratingAvg: number;
  reviewCount: number;
};

function RatingBar({ ratingExpect, ratingAvg, reviewCount }: Props) {
  return (
    <RatingBarWrapper>
      <RatingBox>
        <RatingTitle>예상 평점</RatingTitle>
        <Rating>{ratingAvg.toFixed(1)}점</Rating>
      </RatingBox>
      <RatingBox>
        <RatingTitle>전체 평점</RatingTitle>
        <Rating>{ratingExpect.toFixed(1)}점</Rating>
      </RatingBox>
      <RatingBox>
        <RatingTitle>리뷰</RatingTitle>
        <Rating>{reviewCount}개</Rating>
      </RatingBox>
    </RatingBarWrapper>
  );
}

const RatingBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0px 20px;
  z-index: 20;
`;

const RatingBox = styled.div`
  display: flex;
  padding: 12px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  flex: 1 0 0;
`;

const RatingTitle = styled.div`
  color: var(--dark-grey-700, #c3c3c6);
  text-align: center;

  /* Body3 */
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 15.6px */
`;

const Rating = styled.div`
  color: var(--dark-grey-700, #c3c3c6);
  text-align: center;

  /* Subtitle2 */
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.014px;
`;

export default RatingBar;
