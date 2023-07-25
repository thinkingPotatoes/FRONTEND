import { styled } from 'styled-components';
import CommentCount from '../common/CommentCount.tsx';
import LikeCount from '../common/LikeCount.tsx';
import RatedStar from '../common/RatedStar.tsx';

function ReviewItem() {
  return (
    <ReviewItemWrapper>
      <Title>블랙위도우의 첫등장!: 영화 - 아이언맨 2</Title>
      <RatedStar />
      <Content>
        그래서 오늘은 블랙위도우 못 보는 기념 블랙위도우가 처음 등장하는 영화인
        아이언맨2를 리뷰해보려구요! 바로 시작해볼까요! 아이언맨2 감독: 존...
        수많은 관객앞에 슈트를 입은 채 등장한 토니는 아이언맨의 등장으로 찾아온
        평화를 자랑하며 세계 각국과 여러 기업의 최고 과학자들이 모여
      </Content>
      <Info>
        <CreatedAt>2023.06.30</CreatedAt>
        <Reactions>
          <LikeCount />
          <CommentCount />
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
