import WriterInfo from './WriterInfo';
import CategoryChips from './CategoryChips';
import { styled } from 'styled-components';
import MovieInfo from './MovieInfo';
import WatchInfo from './WatchInfo';
import { ReviewDetail } from '../types/review';

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
      <WriterInfo />
      <CategoryChips isSpoiler={data.spoiler} scope={data.scope} />
      <div className="title">{data.subject}</div>
      <MovieInfo info={data.movieDto} star={data.star} />
      <WatchInfo date={data.watchedAt} location={data.theater} seat={data.seat} />
      <div className="contents">{data.content}</div>
    </ContentsWrapper>
  );
};

const ContentsWrapper = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;

  > .title {
    color: var(--text-emphasize);
    font-size: 24px;
    font-weight: 600;
    line-height: 130%; /* 31.2px */
    letter-spacing: -0.24px;
    margin-bottom: 24px;
  }

  .contents {
    color: var(--text-emphasize);
    font-size: 16px;
    font-weight: 500;
    line-height: 130%; /* 20.8px */
    letter-spacing: -0.016px;
    margin-bottom: 100px;
  }
`;
export default ReviewContents;
