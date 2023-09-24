export interface Review {
  createdAt: string;
  id: string;
  movieId: string;
  subject: string;
  content: string;
  star: number;
  scope: string;
  theater: string;
  seat: string;
  spoiler: boolean;
  likeCnt: number;

  blogUserDto?: null;
  movieDto?: null;
  commentCnt?: null | number;
}
