import type { JSX } from "react";
import type { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
//import { lightBlue } from "@mui/material/colors";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import style from './Tasks.module.css'
import { Col, Container, Row } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';


export default function Tasks(): JSX.Element {
  const tasks = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();
  function handleChangeStatus(id: string): void {
    dispatch({ type: "tasks/changeStatus", payload: id });
  }
  function handleRemove(id: string): void {
    dispatch({ type: "tasks/remove", payload: id });
  }
  return (
    <Container className={style.container}  fluid  >
    <Row className="justify-content-center" >
      <Col xs={10} md={8} lg={6}>
    <div>

      <h1>TASKS</h1></div>
       </Col>
     </Row>
     <Row className="justify-content-center" >
      <Col  md={8} lg={6}  className="d-none d-md-block">
      <ListGroup as="ol" numbered>
        {tasks.map((task) => (
          <ListGroup.Item
        as="li"
        className={`d-flex text-wrap justify-content-between align-items-start ${style.li}`} key={task.id} >
            <span
              style={
                task.isDone
                  ? { textDecoration: "line-through" }
                  : { textDecoration: "none" }
              }
            >
              <b>{task.isDone}</b>
             {task.title}
            </span>
           <div className={style.icon}> 
            <DeleteIcon onClick={() => handleRemove(task.id)} />
            {task.isDone?
            <CheckBoxIcon onClick={() => handleChangeStatus(task.id)} />:
            <CheckBoxOutlineBlankIcon
              onClick={() => handleChangeStatus(task.id)} //Условный рендеринг
            />}</div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Col>
     </Row>
    </Container>
  );
}
