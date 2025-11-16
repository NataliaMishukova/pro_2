import type { JSX } from 'react';
import type { MovieId } from './types/Movie';
import { useDispatch, useSelector } from 'react-redux';
import selectMovie from './selectors';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Tooltip,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import MovieEdit from './MovieEdit';
import styles from './Movies.module.css';

export default function Movies(): JSX.Element {
  const movies = useSelector(selectMovie);
  const dispatch = useDispatch();

  const handleDelete = (id: MovieId): void => {
    dispatch({ type: 'movies/delete', payload: id });
  };

  return (
    <div className='grid grid-cols-3 gap-6'>
      {movies.map((movie) => (
        <Card
          key={movie.id}
          className={`relative w-64 h-96 rounded-xl overflow-hidden shadow-xl bg-black ${styles.card}`}
        >
          <CardMedia
            component='img'
            height='350'
            image={movie.image}
            alt={movie.title}
            className={`w-full h-full object-cover ${styles.image}`}
          />
          <div className={`absolute top-2 right-2 flex gap-1 ${styles.icons}`}>
            <Tooltip title={`Удалить фильм ${movie.title}`}>
              <IconButton size='small' onClick={() => handleDelete(movie.id)}>
                <DeleteIcon className='bg-red-600/50 text-white hover:bg-yellow-400 text-8xl' />
              </IconButton>
            </Tooltip>

            <MovieEdit movie={movie} />
          </div>

          <CardContent
            className={`absolute bottom-0 w-full p-4 text-white bg-black/60 ${styles.desc}`}
          >
            <Typography variant='h6' className='text-xl font-bold drop-shadow'>
              {movie.title}
            </Typography>
            <Typography className='text-xs opacity-80 mb-1'>
              Страна: {movie.country}
            </Typography>
            <Typography className='text-xs opacity-80 mb-1'>
              Жанр: {movie.genre}
            </Typography>
            <Typography className='text-xs opacity-80 mb-1'>
              Год: {movie.releaseDate}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
