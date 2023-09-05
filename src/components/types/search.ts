export interface MovieResponseList {
  docId: string;
  genre: string;
  nation: string;
  poster: string;
  prodYear: string;
  title: string;
}

export interface searchMovieBar {
  message: string;
  data: MovieResponseList[];
}
