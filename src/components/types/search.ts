export interface MovieResponseList {
  docId: string;
  title: string;
  poster: string;
  prodYear: string;
}

export interface searchMovieBar {
  message: string;
  data: MovieResponseList[];
}
