import type { Action } from './types/Action';
import type Movie from './types/Movie';
import { uid } from 'uid';

const initialState: Movie[] = [
  {
    id: uid(),
    title: 'Унесённые ветром (1939)',
    genre: 'Мелодрама',
    country: 'США',
    releaseDate: '1939-01-01',
    image:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/0e8db812-35c1-4650-8c76-654f6eed9535/600x900',
  },
  {
    id: uid(),
    title: 'Амели (2001)',
    genre: 'Мелодрама',
    country: 'Франция',
    releaseDate: '2001-01-01',
    image:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/a49739d0-a2da-4e53-83c0-116fe2d4cc27/600x900',
  },
  {
    id: uid(),
    title: 'The Dark Knight',
    genre: 'Триллер',
    country: 'USA',
    releaseDate: '2008-07-18',
    image:
      'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
  },
  {
    id: uid(),
    title: 'Forrest Gump',
    genre: 'Драма',
    country: 'USA',
    releaseDate: '1994-07-06',
    image:
      'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
  },
];

export default function moviesReducer(
  state: Movie[] = initialState,
  action: Action
): Movie[] {
  switch (action.type) {
    case 'movie/add':
      return [...state, { ...action.payload, id: uid() }];
    case 'movies/delete':
      return state.filter((movie) => movie.id !== action.payload);
    case 'movies/editTitle':
      return state.map((movie) =>
        movie.id === action.payload.id ? action.payload : movie
      );
    default:
      return state;
  }
}
