import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, ListGroup, ButtonGroup, Button, ButtonToolbar } from 'react-bootstrap';
import Task from './Task';
import NavBarFilters from './NavBarFilters';
import NavBarProjects from './NavBarProjects';
import NavBarMobile from './NavBarMobile';
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
      <Row><NavBarMobile setOpen={setOpen} open={open}/></Row>
      <Row>
        <NavBarFilters setOpen={setOpen} open={open}/>
        <NavBarProjects setOpen={setOpen} open={open}/>
        <Col md={8} xs={open ? '8' : '11'} className="mr-4" className="p-5 m-0">
          <ButtonToolbar aria-label="Toolbar with button groups" className="d-none d-md-block" style={{position:'absolute', right: "2rem"}}>
            <ButtonGroup className="mr-2" aria-label="First group">
              {otherFilters.map(tmp=><Button className="bg-primary">{tmp}</Button>)}
            </ButtonGroup>
          </ButtonToolbar>
          <h1 id='filter-title' className="mt-4">Title</h1>
          <ListGroup variant="flush">{
            fakeTasks.map((task)=>
              <Task id={task.id} label={task.label}
              projectBadge={task.projectBadge} completed={task.completed === 'true'}
              dateBadge={task.dateBadge} date={task.date} icon={task.icon}
              dateVariant={task.dateVariant} />)}
          </ListGroup>
        </Col>
      </Row>
      <Button className="btn btn-lg btn-primary position-fixed rounded-circle" style={{ width: '3.5rem', height: '3.5rem', bottom: "2rem", right: "2rem" }}>
        <i className="bi bi-plus-circle-dotted text-light d-flex justify-content-center" style={{ fontSize: '2rem' }}></i>
      </Button>
    </Container>
  );
}

export default App;