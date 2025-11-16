import { useState, type FormEvent, type JSX } from 'react';
import { useDispatch } from 'react-redux';
import {
  TextField,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import { uid } from 'uid';

export default function MovieCreation(): JSX.Element {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [image, setImage] = useState('');
  const [country, setCountry] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  function validateInputs(): boolean {
    if (!title.trim()) return setError('Название не должно быть пустым'), false;
    if (!genre.trim()) return setError('Выберите жанр'), false;
    if (!country.trim()) return setError('Укажите страну'), false;
    if (!releaseDate.trim()) return setError('Укажите год выпуска'), false;
    if (!image.trim()) return setError('Укажите URL картинки'), false;
    return true;
  }

  function handleSubmit(e: FormEvent): void {
    e.preventDefault();
    if (!validateInputs()) return;

    dispatch({
      type: 'movie/add',
      payload: { title, genre, country, releaseDate, image },
    });

    setTitle('');
    setGenre('');
    setCountry('');
    setReleaseDate('');
    setImage('');
    setError('');
  }

  return (
    <Card className='p-1 max-w-xl mx-auto shadow-lg'>
      <CardContent>
        <Typography variant='h5' className='mb-4'>
          Добавить фильм
        </Typography>

        {error && <p className='text-red-600 mb-2'>{error}</p>}

        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <TextField
            label='URL изображения'
            value={image}
            onChange={(e) => setImage(e.target.value)}
            fullWidth
          />

          <TextField
            label='Название'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
          />

          <TextField
            label='Страна'
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            fullWidth
          />

          <TextField
            label='Дата выхода:'
            type='date'
            defaultValue={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
            variant='filled'
            fullWidth
            InputLabelProps={{ shrink: true }}
          />

          <FormControl fullWidth>
            <InputLabel id='genre-label'>Жанр</InputLabel>
            <Select
              labelId='genre-label'
              label='Жанр'
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            >
              <MenuItem value='Мелодрама'>Мелодрама</MenuItem>
              <MenuItem value='Комедия'>Комедия</MenuItem>
              <MenuItem value='Драма'>Драма</MenuItem>
              <MenuItem value='Боевик'>Боевик</MenuItem>
              <MenuItem value='Триллер'>Триллер</MenuItem>
              <MenuItem value='Ужасы'>Ужасы</MenuItem>
            </Select>
          </FormControl>

          <Button variant='contained' color='primary' type='submit'>
            Добавить фильм
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
