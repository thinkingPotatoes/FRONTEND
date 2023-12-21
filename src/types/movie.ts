export interface Movie {
  docId: string;
  title: string;
  titleEng: string;
  titleOrg: string;
  nation: string;
  company: string;
  prodYear: string;
  plot: string;
  runtime: string;
  rating: string;
  genre: string;
  repRlsDate: string;
  keywords: string;
  poster: string;
  ratingAvg?: number;
}

export interface Genre {
  id: string;
  genre: string;
}
