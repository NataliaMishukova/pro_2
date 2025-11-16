import type { JSX } from 'react';
import './App.css';
import Tasks from './components/tasks/Tasks';
import TaskCreation from './components/tasks/TaskCreation';
import DishesList from './components/dishes/DishesList';
import DishForm from './components/dishes/DishForm';
import MoviesApp from './components/Movies/MoviesApp';

function App(): JSX.Element {
  return (
    <>
      <MoviesApp />
      <div className='dishForm'>
        <DishForm />
        <DishesList />
      </div>
      <div className='taskForm'>
        <TaskCreation />
        <Tasks />
      </div>
    </>
  );
}

export default App;
