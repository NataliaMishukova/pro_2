import { useState, type FormEvent, type JSX } from "react";
import { useDispatch } from "react-redux";

/*-------форма для добавления нового фильма------------ */
/*Локальное состояние*/

export default function MovieCreation(): JSX.Element {
  const [title, setTitle] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [releaseDate, setReleaseDate] = useState<string>("");
  const [error, setError] = useState<string>("");

  const dispatch = useDispatch();

  function validateInputs(): boolean {
    if (title.trim() === "") {
      setError("Название не должно быть пустым");
      return false;
    }
    if (genre.trim() === "") {
      setError("Выберите жанр");
      return false;
    }
    if (country.trim() === "") {
      setError("Укажите срану");
      return false;
    }
    if (releaseDate.trim() === "") {
      setError("Укажите год выпуска фильма");
      return false;
    }
    if (image.trim() === "") {
      setError("Заполните поле картинка");
      return false;
    }
    return true;
  }

  function clearInputsAndError(): void {
    setTitle("");
    setGenre("");
    setCountry("");
    setReleaseDate("");
    setImage("");
    setError("");
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (validateInputs()) {
      dispatch({
        type: "movie/add",
        payload: { title, genre, country, releaseDate, image },
      });
      clearInputsAndError();
    }
  }

  return (
    <div>
      <h1>Форма для добавления фильмов</h1>
      <form onSubmit={handleSubmit}>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <input
          type="text"
          placeholder="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <select
          name="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="" disabled>
            жанр
          </option>
          <option value="action">Боевик</option>
          <option value="comedy">Комедия</option>
          <option value="drama">Драма</option>
          <option value="scienceFiction">Фантастика</option>
          <option value="Thriller">Триллер</option>
          <option value="horror">Ужасы</option>
          <option value="adventure">Приключения</option>
          <option value="detective">Детектив</option>
          <option value="romance">Мелодрама</option>
          <option value="western">Вестерн</option>
          <option value="musical">Мьюзикл</option>
          <option value="documentary">Документальный</option>
          <option value="fantasy">Фэнтези</option>
          <option value="historical">Исторический</option>
        </select>
         <input
          type="text"
          placeholder=" release date"
          value={country}
          onChange={(e) => setReleaseDate(e.target.value)}
        />
        <button type="submit">Добавить фильм</button>
      </form>
    </div>
  );
}
