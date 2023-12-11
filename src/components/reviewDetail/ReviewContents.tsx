import WriterInfo from './WriterInfo';
import CategoryChips from './CategoryChips';
import { styled } from 'styled-components';
import MovieInfo from './MovieInfo';
import WatchInfo from './WatchInfo';
import { ReviewDetail } from '../../types/review';

interface Props {
  data: ReviewDetail | null;
}

const ReviewContents = ({ data }: Props) => {
  if (!data) {
    //데이터 없음
    return <></>;
  }
  return (
    <ContentsWrapper className="wrapper">
      <WriterInfo userName={data.blogUserDto.nickname} date={data.createdAt.split('T')[0]} />
      <CategoryChips isSpoiler={data.spoiler} scope={data.scope} />
      <ReviewTitle>{data.subject}</ReviewTitle>
      <MovieInfo info={data.movieDto} star={data.star} />
      <WatchInfo date={data.watchedAt} location={data.theater} seat={data.seat} />
      <ReviewContent>{data.content}</ReviewContent>
    </ContentsWrapper>
  );
};

const ReviewTitle = styled.div`
  color: var(--text-emphasize);
  font-size: 24px;
  font-weight: 600;
  line-height: 130%; /* 31.2px */
  letter-spacing: -0.24px;
  margin-bottom: 24px;
`;

const ReviewContent = styled.div`
  color: var(--text-emphasize);
  font-size: 16px;
  font-weight: 500;
  line-height: 130%; /* 20.8px */
  letter-spacing: -0.016px;
  margin-bottom: 100px;
`;

const ContentsWrapper = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
`;
export default ReviewContents;
