import WriterInfo from './WriterInfo';
import CategoryChips from './CategoryChips';
import { styled } from 'styled-components';
import MovieInfo from './MovieInfo';
import { Movie } from '../types/movie';
import WatchInfo from './WatchInfo';

interface Props {
  id: string;
  userId: string;
  blogUserDto: {
    nickname: string;
    title: string;
  };
  movieId: string;
  movieDto: Movie;
  subject: string;
  content: string;
  star: number;
  scope: string;
  theater: string;
  seat: string;
  spoiler: boolean;
  likeCnt: number | null;
  commentCnt: number;
  watchedAt: string;
  createdAt: string;
}

const dummyData: Props = {
  id: '6fd4cdfc-b650-4826-8765-b3f0061e6f60',
  userId: '3fac1359-73de-4241-bebf-3bf01933a463',
  blogUserDto: {
    nickname: 'Filmo_QPZa',
    title: "Filmo_QPZa's Filog",
  },
  movieId: 'A04966',
  movieDto: {
    docId: 'A04966',
    title: ' 올 마이 라이프',
    titleEng: 'All My Life (Ol Mai Raipeu)',
    titleOrg: '',
    nation: '대한민국',
    company: '',
    prodYear: '2009',
    plot: '결혼 전 나의 이야기를 담았다. 후기성공적으로 끝내서 기분 좋다. 교육을 통해 만나게 된 분들의 강하고 자신감이 있는, 서로 소통하는 모습을 보아서 좋았다.',
    runtime: '10',
    rating: '',
    genre: '인물',
    repRlsDate: '',
    keywords: '결혼이주,부부관계,가족,미디어,워크샵',
    poster: '',
  },
  subject: '재밌었다',
  content: '히힣',
  star: 0.0,
  scope: 'PUBLIC',
  theater: 'CGV',
  seat: '1',
  spoiler: false,
  likeCnt: null,
  commentCnt: 0,
  watchedAt: '2023-08-10T17:08:00',
  createdAt: '2023-09-05T09:03:13.878664',
};

const ReviewContents = () => {
  return (
    <ContentsWrapper className="wrapper">
      <WriterInfo />
      <CategoryChips isSpoiler={true} scope="PUBLIC" />
      <div className="title">{dummyData.subject}</div>
      <MovieInfo info={dummyData.movieDto} star={dummyData.star} />
      <WatchInfo date={dummyData.watchedAt} location={dummyData.theater} seat={dummyData.seat} />
      <div className="contents">{dummyData.content}</div>
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
