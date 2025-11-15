import Sandwich from './Sandwich';
import type { Action } from './types/Action';
import type SandwichState from './types/SandwichState';
//начальное значение централизованного состояния

const initialState: SandwichState = {
  value: 'Ingridients:  ',
  
};
export default function sandwichReducer(
  state: SandwichState = initialState,
  action: Action
): SandwichState {
  switch (action.type) {
    case "addBread":
      return {
        ...state,
        value: state.value + action.payload,
      };
    case "addCheese":
      return {
        ...state,
        value: state.value + action.payload,
      };
       case "addBacon":
      return {
        ...state,
        value: state.value + action.payload,
      };
       case "addSalad":
      return {
        ...state,
        value: state.value + action.payload,
      };
    case "EatAll":
      return {
        ...state,
        value: state.value ='Ingridients:  '
      };
      default:return state
  }
}
// Начальное состояние: Создаётся начальное состояние initialState для счётчика.
// initialState имеет свойство value, установленное на 0.
// Тип этого начального состояния указан как CounterState.
// Функция counterReducer: Экспортируется функция counterReducer,
// которая принимает два аргумента: state и action.
// state инициализируется значением initialState,
// но если не передано значение, то будет использовано initialState.
// action представляет собой действие, которое нужно применить к состоянию.
// Ожидается, что action будет иметь свойство type для определения типа действия и,
// возможно, payload для передачи данных.
// switch-case конструкция: Внутри функции counterReducer используется оператор switch,
// чтобы определить, какое действие следует предпринять в зависимости от типа action.type.
// case 'counter/minus': Если тип действия равен 'counter/minus',
// то выполняется вычитание значения action.payload из текущего state.value.
// case 'counter/plus': Если тип действия равен 'counter/plus',
// то выполняется сложение значения action.payload к текущему state.value.
// default: Если тип действия не совпадает ни с одним из указанных case,
// возвращается текущее состояние state без изменений.
// Возвращаемое значение: В зависимости от типа действия,
// функция counterReducer возвращает новое состояние с обновлённым значением value
// или текущее состояние, если тип действия не определён.