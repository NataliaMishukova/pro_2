import { dividerClasses } from "@mui/material";
import { useState, type FormEvent, type JSX } from "react";
import { useDispatch } from "react-redux";
import style from "./taskCreation.module.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
//import "bootstrap/dist/css/bootstrap.min.css";

//описываем создание задачи

export default function TaskCreation(): JSX.Element {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const dispatch = useDispatch();
  function handleSubmit(event: FormEvent<HTMLElement>): void {
    event.preventDefault();
    dispatch({
      type: "tasks/add",
      payload: { title, description, isDone: false },
    });
    setTitle("");
    setDescription("");
  }

  return (
  <Container className={style.container} fluid >
      {/*<div className={style.container}>*/}
        <Row className="justify-content-center" >
          <Col xs={10} md={8} lg={6}>
              <h1 className="mb-5">Tasks form</h1>
          </Col>
        </Row>
        <form onSubmit={handleSubmit}>
          <Row className="justify-content-center" mb={4}>
            <Col xs={10} md={8} lg={6}>
              <Form.Control size="sm" as="textarea"
              className={`mb-4 ${style.title}`}
                maxLength={60}
              rows={1}
                type="text"
                placeholder="title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="justify-content-center" mb={4}>
            <Col xs={10} md={8} lg={6}>
              <Form.Control size="sm" as="textarea"
                className={`mb-4 ${style.description}`}
                rows={7}
                wrap="soft"
                placeholder="description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Col>
          </Row >
          <Row className="justify-content-center" mb={4}>
            <Col  xs={1} md={5} lg={4} >
          
            <Button className="mb-5"  type="submit" >Create</Button>
        </Col></Row>
        </form>
     
</Container>);}


    /*
      <div className={style.container}>
        
              <h1>Форма создания задачи</h1>
      
        <form onSubmit={handleSubmit}>
       
              <input
                className={style.title}
                type="text"
                placeholder="title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                className={style.description}
                type="text"
                placeholder="description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
          
          <div>
            <button type="submit">Создать</button>
          </div>
        </form>
      </div>
  
  );*/
  
  /*(
 
      );
} */

/* (
      <div className={style.container}>
        
              <h1>Форма создания задачи</h1>
      
        <form onSubmit={handleSubmit}>
       
              <input
                className={style.title}
                type="text"
                placeholder="title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                className={style.description}
                type="text"
                placeholder="description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
          
          <div>
            <button type="submit">Создать</button>
          </div>
        </form>
      </div>
  
  );
}*/