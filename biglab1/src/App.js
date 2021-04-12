import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, ListGroup, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Task from './Task';

function App() {
  return (
    <Container fluid={true} className="p-0 m-0">
        <Navbar bg="primary" className="col-12">
          <Navbar.Brand href="#home">
            ToDo Manager
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
      <Row>
        <Col xs={3}>
          <aside className="collapse d-sm-block col-sm-4 col-12 bg-primary" id="filter-sidebar" style={{minHeight: '100vh', minWidth: '100%'}}>
            <ListGroup variant="flush">
              <ListGroup.Item id="filter-all" className="list-group-item list-group-item-action active">All</ListGroup.Item>
              <ListGroup.Item id="filter-all" className="list-group-item list-group-item-action">Important</ListGroup.Item>
              <ListGroup.Item id="filter-all" className="list-group-item list-group-item-action">Today</ListGroup.Item>
              <ListGroup.Item id="filter-all" className="list-group-item list-group-item-action">This week</ListGroup.Item>
              <ListGroup.Item id="filter-all" className="list-group-item list-group-item-action">Private</ListGroup.Item>
            </ListGroup>
          </aside>
        </Col>
        <Col>
          <h1 className="pt-4">Title</h1>
          <ListGroup variant="flush">
            <Task id={0} label="blank task"/>
            <Task id={1} label="task1" projectBadge='project' dateBadge='Today at 14:00'/>
            <Task id={2} completed={true}/>
            <Task id={3} label="pizza" completed={true} projectBadge='project' icon={true} dateBadge='Tomorrow at 11:00'/>
            <Task id={4} label="elapsed task" date='1999-01-01' dateVariant='danger'/>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default App;