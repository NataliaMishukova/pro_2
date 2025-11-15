import type { JSX } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import style from "./Counter.module.css";

export default function Counter(): JSX.Element {
  const dispatch = useDispatch(); //далее будем менять переменную
  function handlePlus(): void {
    // Dispatch мы вызываем когда хотим изменить централизованное состояние
    dispatch({ type: "counter/plus", payload: 1 }); //туда надо передать какие то действия
  }
  function handleMinus(): void {
    // Dispatch мы вызываем когда хотим изменить централизованное состояние
    dispatch({ type: "counter/minus", payload: 1 }); //туда надо передать какие то действия
  }
  function handleReset(): void {
    // Dispatch мы вызываем когда хотим изменить централизованное состояние
    dispatch({ type: "counter/reset" }); //туда надо передать какие то действия
  }
  const counter = useSelector((state: RootState) => state.counter.value); // useSelector - функция для получения значения централизованного состояния
  return (
    <div className={style.container}>
      <button type="button" onClick={handlePlus} className={style.btn1}>
        +
      </button>
      {counter}
      <button type="button" onClick={handleMinus} className={style.btn2}>
        -
      </button>
      <button type="button" onClick={handleReset} className={style.btn3}>
        Reset
      </button>
    </div>
  );
}
