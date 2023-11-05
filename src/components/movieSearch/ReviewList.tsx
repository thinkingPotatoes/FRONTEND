import React, { SetStateAction } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { Review } from '../../types/review.ts';
import ReviewButton from './ReviewButton.tsx';
import ReviewItem from './ReviewItem.tsx';
import SortBy from './SortBy.tsx';

type Props = {
  endRef: (node?: Element | null | undefined) => void;
  reviewList: Review[];
  sort: string;
  setSort: React.Dispatch<SetStateAction<string>>;
};

function ReviewList({ endRef: ref, reviewList, sort, setSort }: Props) {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <ReviewListWrapper>
      <ListHeader>
        <ListTitle>영화 리뷰 💬</ListTitle>
        <SortByWrapper>
          <SortBy sort={sort} setSort={setSort} />
        </SortByWrapper>
      </ListHeader>
      <ListWrapper>
        <List>
          {reviewList.map((review) => (
            <ReviewItem key={review.id} review={review} />
          ))}
        </List>
        <EndOfList ref={ref} />
      </ListWrapper>
      <ReviewButton onClick={() => navigate(`/postreview/${id}`)} />
    </ReviewListWrapper>
  );
}

const ReviewListWrapper = styled.div`
  display: flex;
  padding-top: 16px;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 20px;

  border-radius: 32px 32px 0px 0px;
  background: var(--dark-grey-50, #202027);

  height: calc(100vh - 153.7px);
  overflow: scroll;

  z-index: 10;
`;

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 56px;
  align-items: center;
`;

const ListWrapper = styled.div`
  width: 100%;
  overflow: scroll;
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

const EndOfList = styled.div`
  height: 72px;
`;

const SortByWrapper = styled.div`
  display: flex;
`;

// const SortBy = styled.div`
//   color: var(--dark-grey-500, #7e7e87);
//   /* Body3 */
//   font-family: Pretendard;
//   font-size: 12px;
//   font-style: normal;
//   font-weight: 500;
//   line-height: 130%; /* 15.6px */
// `;

export default ReviewList;
