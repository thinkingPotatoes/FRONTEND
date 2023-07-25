import { styled } from 'styled-components';
import ReviewItem from './ReviewItem.tsx';

function ReviewList() {
  return (
    <ReviewListWrapper>
      <ListHeader>
        <ListTitle>영화 리뷰 💬</ListTitle>
        <div>인기 순</div>
      </ListHeader>
      <List>
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
      </List>
    </ReviewListWrapper>
  );
}

const ReviewListWrapper = styled.div`
  display: flex;
  padding-top: 16px;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  padding: 16px 20px;

  border-radius: 32px 32px 0px 0px;
  background: var(--dark-grey-50, #202027);
`;

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 56px;
  align-items: center;
`;

const ListTitle = styled.div`
  color: var(--dark-grey-800, #e4e4e5);

  /* Head3 */
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.09px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export default ReviewList;
