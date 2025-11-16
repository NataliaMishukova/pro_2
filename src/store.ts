import { combineReducers, createStore } from 'redux';
import counterReducer from './components/counter/counterReducer';
import SandwichReducer from './components/Sandwich/SandwichReducer';
import tasksReducer from './components/tasks/taskReducer';
import dishesReducer from './components/dishes/dishesReducer';
import moviesReducer from './components/Movies/moviesReducer';

const store = createStore(
  combineReducers({
    counter: counterReducer,
    sandwich: SandwichReducer,
    tasks: tasksReducer,
    dishes: dishesReducer,
    movies: moviesReducer,
  })
);

export default store;

export type RootState = ReturnType<typeof store.getState>;

// import { combineReducers, createStore } from 'redux';
// - Здесь импортируются функции combineReducers и createStore из библиотеки Redux.
// combineReducers используется для объединения нескольких редюсеров в один,
// а createStore используется для создания Redux-хранилища.

// export type RootState = ReturnType<typeof store.getState>; - Экспорт типа RootState,
// который представляет тип состояния Redux.
// ReturnType<typeof store.getState> используется для извлечения типа состояния,
// возвращаемого функцией getState объекта store.
