import type { JSX } from "react";
import "./App.css";
//import Counter from "./components/counter/Counter";
//import Sandwich from "./components/Sandwich/Sandwich";
import Tasks from "./components/tasks/Tasks";
import TaskCreation from "./components/tasks/TaskCreation";
import Bootstrap from "./components/bootstrap/Bootstrap";
import DishesList from "./components/dishes/DishesList";
import DishForm from "./components/dishes/DishForm";
import MovieCreation from "./components/Movies/MovieCreation";
import Movies from "./components/Movies/Movies";

//import Bootstrap from "./components/bootstrap/bootstrap.tsx";
//import { Container, Row, Col } from "react-bootstrap";
//import "bootstrap/dist/css/bootstrap.min.css";

function App(): JSX.Element {
  return (
    <>
<div className="movieForm">
        <MovieCreation />
        <Movies />
      </div>
    <div className="dishForm">
        <DishForm />
        <DishesList />
      </div>
      <div className="taskForm">
        <TaskCreation />
        <Tasks />
      </div>
   </>
  );
}

export default App;
