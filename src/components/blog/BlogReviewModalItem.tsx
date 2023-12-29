import { useEffect, useState } from 'react';
import axios from '../../api/apiController';
import { ReviewSummary } from '../../types/review';
import styled from 'styled-components';
import BlogReviewSummaryItem from './BlogReviewSummaryItem';
import Subtitle2 from '../common/texts/Subtitle2';
import { ReactComponent as LogoIcon } from '../../assets/image/icon/logo.svg';
import { useNavigate } from 'react-router-dom';

interface Props {
  year: number;
  month: number;
  date: number;
}

function BlogReviewModalItem({ year, month, date }: Props) {
  const [reviews, setReivews] = useState<ReviewSummary[]>([]);
  const navigate = useNavigate();

  const fetchReviews = async () => {
    const {
      data: { data },
    } = await axios.get(`/filog/calendar/${year}/${month}/${date}`);
    setReivews(data);
  };
  useEffect(() => {
    fetchReviews();
  }, []);
  return (
    <Container>
      <Date>
        <LogoIcon width={108} height={108} />
        <DateText>{date}</DateText>
      </Date>

      <ReviewSummaryList>
        {reviews.length ? (
          reviews.map(({ subject, keywords, star, poster }: ReviewSummary) => (
            <BlogReviewSummaryItem
              subject={subject}
              keywords={keywords.split(',')}
              grade={star}
              poster={poster}
            />
          ))
        ) : (
          <NoReview>
            <Subtitle2>작성된 리뷰가 없어요</Subtitle2>
          </NoReview>
        )}
      </ReviewSummaryList>

      <WriteReviewButton onClick={() => navigate('/postreview')}>
        <ButtonText>리뷰 작성하기</ButtonText>
      </WriteReviewButton>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const Date = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const DateText = styled.div`
  position: absolute;
  top: 40px;
  color: white;
  font-size: 24px;
`;

const NoReview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--dark-grey-700);
`;

const ReviewSummaryList = styled.div`
  max-height: 300px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ButtonText = styled(Subtitle2)`
  color: white;
`;

const WriteReviewButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: var(--main);
  margin-top: 20px;
  padding: 8px 16px;
  height: 42px;
  border-radius: 8px;
`;

export default BlogReviewModalItem;
