import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col, Button, Modal} from 'react-bootstrap';
import NavBarFilters from './NavBarFilters';
import NavBarProjects from './NavBarProjects';
import NavBarMobile from './NavBarMobile';
import DaytimeFilters from './DaytimeFilters';
import TasksList from './Task';
import ModalTask from './ModalTask';

const fakeTasks = [
  { id: 0, completed:'false', description:'task1', important:'true', project:'PDS', deadline:'2021-04-29 12:00' },
  { id: 1, completed:'true', description:'task2', project:'Web Application 1' },
  { id: 2, completed:'true', description:'pizza', private: true, deadline:'2021-05-04T8:30' },
  { id: 3, completed:'false',description:'lasagna', project:'Web Application 1', deadline:'1999-01-01'},
];

const filters = [
  {label: 'All', icon: 'inbox'},
  {label: 'Important', icon: 'bookmark-star'},
  {label: "Today's", icon: 'sunset'},
  {label: "Next week's", icon: 'calendar-week'},
  {label: 'Private', icon: 'eye-slash'},
];

const daytimeFilters = ['All','Morning','Afternoon','Evening','Night'];

function App() {
  const [open, setOpen] = useState(false);
  const [tasks, setTasks] = useState(fakeTasks);
  const [filter, setFilter] = useState(filters[0].label);
  const [showModalTask, setShowModalTask] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState({});

  const handleShow = () => setShowModalTask(true);

  const handleEdit = (task) => {
    setTaskToEdit(task);
    handleShow();
  }

  const addTask = (task) => {
    setTasks( oldTasks => [{id: oldTasks.length, completed: task.completed, description: task.description, important: task.important, private: task.private, project: task.project, deadline: task.deadline}, ...oldTasks] );
  }

  const editTask = (task) => {
    oldTasks => {oldTasks.map(t => {if(t.id === task.id)return task;else return t;})}
  }

  const deleteTask = (id) => {
    setTasks( oldTask => oldTask.filter(task => task.id !== id) );
  }

  return (
    <Container fluid={true} className='pe-3 m-0'>
      <Col className='p-0 m-0'>
        <Row className='d-block d-lg-none bg-primary mb-5'><NavBarMobile open={open} setOpen={setOpen} filters={filters} setFilter={setFilter}/></Row>
        <Row>
          <NavBarFilters filters={filters} setFilter={setFilter}/>
          {/*<CollapseBar filters={filters}/>*/}
          <Col md={3} className='d-none d-lg-block bg-light align-items-center text-center'><NavBarProjects filters={filters}/></Col>
          <Col className='p-5 m-0 mr-md-4'>
            <Row className='d-flex flex-row-reverse'>
              <DaytimeFilters filters={daytimeFilters}/>
            </Row>
            <Row className='d-flex flex-row'>
              <h1 id='filter-title' className='mt-4'>{filter}</h1>
            </Row>
            <TasksList tasks={tasks} filter={filter} addTask={addTask} editTask={handleEdit} deleteTask={deleteTask}/>
          </Col>
        </Row>
      </Col>
      <Button className='btn btn-lg btn-primary position-fixed rounded-circle' style={{ width: '3.5rem', height: '3.5rem', bottom: '2rem', right: '2rem' , zIndex: '2'}} onClick={handleShow}>
        <i className='bi bi-plus-circle-dotted text-light d-flex justify-content-center' style={{ fontSize: '2rem' }}/>
      </Button>
      <ModalTask show={showModalTask} handleClose={() => setShowModalTask(false)} addTask={addTask} taskToEdit={taskToEdit} setTaskToEdit={setTaskToEdit} editTask={editTask} deleteTask={deleteTask}></ModalTask>
    </Container>
  );
}

export default App;