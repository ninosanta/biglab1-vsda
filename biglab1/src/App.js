import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import NavBarFilters from './NavBarFilters';
import NavBarProjects from './NavBarProjects';
import NavBarMobile from './NavBarMobile';
import DaytimeFilters from './DaytimeFilters';
import TasksList from './Task';
import ModalTask from './ModalTask';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const fakeTasks = [ // id: 0 is "false" so we should start from 1
  { id: 1, completed: 'false', description: 'task1', important: 'true', private: 'false', project: 'PDS', deadline: '2021-04-29T12:00' },
  { id: 2, completed: 'true', description: 'task2', important: 'false', private: 'false', project: 'Web Application 1', deadline: '' },
  { id: 3, completed: 'true', description: 'pizza', important: 'false', private: 'true', project: '', deadline: '2021-05-04T08:30' },
  { id: 4, completed: 'false', description: 'lasagna', important: 'false', private: 'false', project: 'Web Application 1', deadline: '1999-01-01T00:00' }
];

const filters = [
  { label: 'All', icon: 'inbox' },
  { label: 'Important', icon: 'bookmark-star' },
  { label: "Today's", icon: 'sunset' },
  { label: "Next week's", icon: 'calendar-week' },
  { label: 'Private', icon: 'eye-slash' },
];

const daytimeFilters = ['All', 'Morning', 'Afternoon', 'Evening', 'Night'];

function App() {
  const [open, setOpen] = useState(false);
  const [tasks, setTasks] = useState(fakeTasks);
  const [filter, setFilter] = useState(filters[0].label);

  const handleTaskList = {
    addTask: (task) => {
      setTasks(oldTasks => [{ id: oldTasks.length + 1, completed: task.completed, description: task.description, important: task.important, private: task.private, project: task.project, deadline: task.deadline }, ...oldTasks]);
    },

    editTask: (task) => {
      setTasks(oldTasks => oldTasks.map((t) => { if (t.id === task.id) return task; return t; }));
    },

    deleteTask: (id) => {
      setTasks(oldTask => oldTask.filter(t => t.id !== id));
    }
  }

  function selectFilter(filter) {
    setFilter(filter.label);
    filters.forEach(f => {
      document.getElementById(`filter-${f.label}-icon`).classList.replace(`bi-${f.icon}-fill`, `bi-${f.icon}`);
      document.getElementById(`filter-mobile-${f.label}-icon`).classList.replace(`bi-${f.icon}-fill`, `bi-${f.icon}`);
    });
    if (!filters.map(filter => filter.label).includes(filter.label)) return;
    document.getElementById(`filter-${filter.label}-icon`).classList.replace(`bi-${filter.icon}`, `bi-${filter.icon}-fill`);
    document.getElementById(`filter-mobile-${filter.label}-icon`).classList.replace(`bi-${filter.icon}`, `bi-${filter.icon}-fill`);
  }

  return (
    <Router>
      <Container fluid={true} className='pe-3 m-0'>
        <Col className='p-0 m-0'>
          <Row className='d-block d-lg-none bg-primary mb-5'><NavBarMobile open={open} setOpen={setOpen} filters={filters} setFilter={selectFilter} /></Row>

          <Row>
            <NavBarFilters filters={filters} setFilter={selectFilter} />
            {/*<CollapseBar filters={filters}/>*/}
            <Col md={3} className='d-none d-lg-block bg-light align-items-center text-center'><NavBarProjects filters={filters} /></Col>

            <Switch>
              
              <Route exact path="/" render={() => <>
                <Col className='p-5 m-0 mr-md-4'>
                  <Row className='d-flex flex-row-reverse'>
                    <DaytimeFilters filters={daytimeFilters} />
                  </Row>
                  <Row className='d-flex flex-row'>
                    <h1 id='filter-title' className='mt-4'>{filter}</h1>
                  </Row>
                  <TasksList tasks={tasks} filter={filter} handleTaskList={handleTaskList} />
                </Col>
                <Link to="/add">
                  <Button className='btn btn-lg btn-primary position-fixed rounded-circle' style={{ width: '3.5rem', height: '3.5rem', bottom: '2rem', right: '2rem', zIndex: '2' }}>
                    <i className='bi bi-plus-circle-dotted text-light d-flex justify-content-center' style={{ fontSize: '2rem' }} />
                  </Button></Link>
              </>} />

              <Route exact path="/add" render={() => <>
                <ModalTask handleTaskList={handleTaskList} /></>} />

              <Route exact path="/update" render={() => <>
                <ModalTask handleTaskList={handleTaskList} />
              </>} />

            </Switch>

          </Row>
        </Col>
      </Container>
    </Router>
  );
}

export default App;