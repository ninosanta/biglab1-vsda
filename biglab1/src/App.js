import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, ListGroup, ButtonGroup, Button, ButtonToolbar } from 'react-bootstrap';
import Task from './Task';
import VerticalNavbar from './Components';
import React, { useState } from 'react';

const fakeTasks = [
  { id: 0, label:'task1', projectBadge:'PDS', dateBadge:'Today at 14:00' },
  { id: 1, label:'task2', projectBadge:'', dateBadge:'', completed:'true' },
  { id: 2, label:'pizza', projectBadge:'Web Application 1', dateBadge:'Tomorrow at 11:00', completed:'true', icon:'true' },
  { id: 3, label:'lasagna', projectBadge:'PDS', date:'1999-01-01', dateVariant:'danger' },
];

const otherFilters = ['Morning','Afternoon','Evening','Night'];
function App() {
  let [open, setOpen] = useState(false);
  return (
    <Container fluid={true} className="pe-3 m-0">
      <Row>
        <VerticalNavbar setOpen={setOpen} open={open}/>
        <Col md={8} xs={open ? '8' : '11'} className="mr-4" className="p-5 m-0">
          <ButtonToolbar aria-label="Toolbar with button groups" className="d-none d-md-block" style={{position:'absolute', right: "2rem"}}>
            <ButtonGroup className="mr-2" aria-label="First group">
              {otherFilters.map(tmp=><Button className="bg-primary">{tmp}</Button>)}
            </ButtonGroup>
          </ButtonToolbar>
          <h1 className="mt-4">Title</h1>
          <ListGroup variant="flush">{
            fakeTasks.map((task)=>
              <Task key={task.id} label={task.label}
              projectBadge={task.projectBadge} completed={task.completed}
              dateBadge={task.dateBadge} date={task.date} icon={task.icon}
              dateVariant={task.dateVariant} />)}
          </ListGroup>
          <button type="button" className="btn btn-lg btn-primary rounded-circle" style={{ border: '5px solid', borderRadius: '50%', width: '50px', height: '50px', position: "absolute", bottom: "2rem", right: "2rem" }}>
            <i className="bi bi-plus-circle-dotted text-light d-flex justify-content-center" style={{ fontSize: '1.5rem' }}></i>
          </button>
        </Col>
      </Row>
    </Container >
  );
}

export default App;