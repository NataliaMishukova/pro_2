import { type JSX } from "react";
import style from "./Sandwich.module.css";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
//import { useTheme } from "../themeContext/useTheme";

export default function Sandwich(): JSX.Element {
  //const { theme, toggleTheme } = useTheme(); //используем хук для темы, фигурные скобки говорят о диструкторизации данных
  const sandwich = useSelector((state: RootState) => state.sandwich.value);
  const dispatch = useDispatch();

  function handleAddBrad(): void {
    dispatch({ type: "addBread", payload: ` Bread 🍞` });
  }
  function handleAddCheese(): void {
    dispatch({ type: "addCheese", payload: ` Cheese 🧀` });
  }

  function handleAddBacon(): void {
    dispatch({ type: "addBacon", payload: ` Bacon 🥓` });
  }

  function handleAddSalad(): void {
    dispatch({ type: "addSalad", payload: ` Salad 🥬` });
  }

  function handleReset(): void {
    dispatch({ type: "EatAll" });
  }

  return (
    <div className={style.container}>
      {/*<div
      className={`${style.container}  ${
        theme === "dark" ? style.dark : style.light
      }`}
    > */}
      <h1>Sandwich</h1>

      <img
        className={style.img}
        src="https://mur-mur.top/uploads/posts/2023-05/1683186165_mur-mur-top-p-mini-burgeri-keitering-krasivo-53.jpg"
        alt=""
      />
      <h2>Choose sandwich </h2>
      <p>{sandwich}</p>
      <div className={style.btnContainer}>
        <button type="button" onClick={handleAddBrad} className={style.btn1}>
          Add bread
        </button>
        <button type="button" onClick={handleAddCheese} className={style.btn2}>
          Add cheese
        </button>
        <button type="button" onClick={handleAddBacon} className={style.btn3}>
          add bacon
        </button>
        <button type="button" onClick={handleAddSalad} className={style.btn4}>
          Add salad
        </button>
        <button type="button" onClick={handleReset} className={style.btn5}>
          Eat all
        </button>
      </div>
      {/*<button type="button" className={style.themeToggle } onClick={toggleTheme} >Переключить тему на (текущая: {theme})</button>*/}
    </div>
  );
}
