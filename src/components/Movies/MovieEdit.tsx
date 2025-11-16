import { useState, type JSX } from 'react';
import {
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Tooltip,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import type Movie from './types/Movie';
import EditNoteIcon from '@mui/icons-material/EditNote';

export default function MovieEdit({ movie }: { movie: Movie }): JSX.Element {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const [title, setTitle] = useState(movie.title);
  const [genre, setGenre] = useState(movie.genre);
  const [image, setImage] = useState(movie.image);
  const [country, setCountry] = useState(movie.country);
  const [releaseDate, setReleaseDate] = useState(movie.releaseDate);

  const handleSave = (): void => {
    dispatch({
      type: 'movies/editTitle',
      payload: { id: movie.id, title, genre, country, releaseDate, image },
    });
    setOpen(false);
  };

  return (
    <>
      <Tooltip title={`Редактировать фильм ${title}`}>
        <IconButton size='small' onClick={() => setOpen(true)}>
          <EditNoteIcon className='bg-green-400 text-white hover:bg-blue-400 text-8xl' />
        </IconButton>
      </Tooltip>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth='sm'
        fullWidth
      >
        <DialogTitle>Редактировать фильм</DialogTitle>
        <DialogContent className='flex flex-col gap-3 mt-2 pt-4'>
          <TextField
            label='Название'
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <TextField
            label='URL изображения'
            fullWidth
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          <TextField
            label='Страна'
            fullWidth
            value={country}
            onChange={(e) => setCountry(e.target.value)}
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
            <InputLabel>Жанр</InputLabel>
            <Select
              value={genre}
              label='Жанр'
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
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)}>Отмена</Button>
          <Button variant='contained' onClick={handleSave}>
            Сохранить
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
