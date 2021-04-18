import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col, Collapse, Dropdown, ListGroup, ButtonGroup, Button, ButtonToolbar } from 'react-bootstrap';
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

const filters = [
  {label: "All", icon: 'inbox'},
  {label: "Important", icon: 'bookmark-star'},
  {label: "Today's", icon: 'sunset'},
  {label: "Next week's", icon: 'calendar-week'},
  {label: "Private", icon: 'eye-slash'},
];

const otherFilters = ['All','Morning','Afternoon','Evening','Night'];

function App() {
  const [open, setOpen] = useState(false);

  return (
    <Container fluid={true} className="pe-3 m-0">
      <Col className="p-0 m-0">
        <Row className="d-block d-md-none bg-primary"><NavBarMobile open={open} setOpen={setOpen} filters={filters}/></Row>
        <Row>
          <Col md={1} className="bg-light align-items-center text-center p-0"><NavBarFilters open={true} filters={filters}/></Col>
          <Col md={3} className="d-none d-md-block bg-light align-items-center text-center"><NavBarProjects filters={filters}/></Col>
          <Col className="p-5 m-0 mr-md-4">
            <Row className="d-flex flex-row-reverse">
              <ButtonToolbar className="d-none d-sm-block d-lg-block" aria-label="Toolbar with button groups">
                <ButtonGroup className="mr-2" aria-label="First group">
                  {otherFilters.map(tmp => <Button key={`otherfilter-${tmp}`} variant="primary">{tmp}</Button>)}
                </ButtonGroup>
              </ButtonToolbar>
              <Dropdown className="d-block d-sm-none d-lg-none">
                <Dropdown.Toggle id="dropdown-other-filters" variant="primary">Daytime filters</Dropdown.Toggle>
                <Dropdown.Menu>
                  {otherFilters.map(tmp => <Dropdown.Item key={`otherfilter-${tmp}`}>{tmp}</Dropdown.Item>)}
                </Dropdown.Menu>
              </Dropdown>
            </Row>
            <Row className="d-flex flex-row">
              <h1 id='filter-title' className="mt-4">All</h1>
            </Row>
            <ListGroup variant="flush">{
              fakeTasks.map((task)=>
                <Task 
                  id={task.id} 
                  key={`task-obj-${task.id}`} 
                  label={task.label} 
                  projectBadge={task.projectBadge} 
                  completed={task.completed === 'true'} 
                  dateBadge={task.dateBadge} 
                  date={task.date} 
                  icon={task.icon}
                  dateVariant={task.dateVariant}
                />)}
            </ListGroup>
          </Col>
        </Row>
      </Col>
      <Button className="btn btn-lg btn-primary position-fixed rounded-circle" style={{ width: '3.5rem', height: '3.5rem', bottom: "2rem", right: "2rem" }}>
        <i className="bi bi-plus-circle-dotted text-light d-flex justify-content-center" style={{ fontSize: '2rem' }}></i>
      </Button>
    </Container>
  );
}

export default App;