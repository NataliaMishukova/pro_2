import type Movie from "./types/Movie";
import type { RootState } from '../../store'

const selectMovie=(state:RootState):Movie[]=>state.movies;

export default selectMovie