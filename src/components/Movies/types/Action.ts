import type Movie from "./Movie";
import type { MovieId } from "./Movie";
import type MovieCredentials from "./MovieCredentials";

export type Action =
  | { type: 'movie/add'; payload: MovieCredentials }
  | { type: 'movies/delete'; payload: MovieId }
  | { type: 'movies/editTitle'; payload: Movie }
