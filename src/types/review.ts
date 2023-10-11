import { Movie } from './movie';

export interface ReviewDetailResponse {
  message: string;
  data: ReviewDetail;
}

export interface ReviewDetail {
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

export interface ReviewComment {
  id: string;
  articleId: string;
  nickname: string;
  userId: string;
  content: string;
  updatedAt: string;
  deletedAt: string | null;
  likeCnt: number;
  parentId: string | null;
}
