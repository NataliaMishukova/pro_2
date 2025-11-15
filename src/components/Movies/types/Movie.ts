export default interface Movie {
  id: string;
  title: string;
  genre: string;
  country: string;
  releaseDate: string;
  image: string;
}
export type MovieId = Movie["id"];
