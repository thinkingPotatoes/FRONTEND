import { styled } from 'styled-components';

function RatingBar() {
  return (
    <RatingBarWrapper>
      <RatingBox>
        <RatingTitle>예상 평점</RatingTitle>
        <Rating>9.0점</Rating>
      </RatingBox>
      <RatingBox>
        <RatingTitle>전체 평점</RatingTitle>
        <Rating>9.2점</Rating>
      </RatingBox>
      <RatingBox>
        <RatingTitle>리뷰</RatingTitle>
        <Rating>64개</Rating>
      </RatingBox>
    </RatingBarWrapper>
  );
}

const RatingBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0px 20px;
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
