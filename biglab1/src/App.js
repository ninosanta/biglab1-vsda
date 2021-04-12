import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, ListGroup, Image, ButtonGroup, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Task from './Task';

function App() {
  return (
    <Container fluid={true} className="p-0 m-0">
      <Row>
        <Col xs={1}>
          <aside className="collapse d-sm-block bg-primary align-items-center text-center" id="filter-sidebar" style={{minHeight: '100vh', minWidth: '100%'}}>
          <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-home">Home</Tooltip>}>
              <Button id="home" className="mt-4" variant="link"><i className="bi bi-list-nested text-dark" aria-label="Home" style={{fontSize: '1.5rem'}} onMouseOver={()=>{this.removeClass("bi-list-nested");this.removeClass("bi-list-nested-fill");}}></i></Button>
            </OverlayTrigger>
            <ButtonGroup vertical className="m-1">
              <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-all">All inbox</Tooltip>}>
                <Button id="filter-all" className="mt-4" variant="link"><i className="bi bi-inbox text-light" aria-label="All" style={{fontSize: '1.5rem'}}></i></Button>
              </OverlayTrigger>
              <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-important">Important</Tooltip>}>
                <Button id="filter-important" className="mt-4" variant="link"><i className="bi bi-bookmark-star text-light" aria-label="Important" style={{fontSize: '1rem'}}></i></Button>
              </OverlayTrigger>
              <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-today">Today</Tooltip>}>
                <Button id="filter-today" className="mt-4" variant="link"><i className="bi bi-sunset text-light" aria-label="Today" style={{fontSize: '1rem'}}></i></Button>
              </OverlayTrigger>
              <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-week">This week</Tooltip>}>
                <Button id="filter-week" className="mt-4" variant="link"><i className="bi bi-calendar-week text-light" aria-label="This week" style={{fontSize: '1rem'}}></i></Button>
              </OverlayTrigger>
              <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-private">Private</Tooltip>}>
                <Button id="filter-private" className="mt-4" variant="link"><i className="bi bi-eye-slash text-light" aria-label="Private" style={{fontSize: '1rem'}}></i></Button>
              </OverlayTrigger>
              <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-all">Search</Tooltip>}>
                <Button id="filter-search" className="mt-4" variant="link"><i className="bi bi-search text-light" aria-label="Search" style={{fontSize: '1rem'}}></i></Button>
              </OverlayTrigger>
            </ButtonGroup>
            <OverlayTrigger placement="right" overlay={<Tooltip id="image-tooltip-profile">Profile</Tooltip>}>
              <Image className="align-bottom mt-4" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" roundedCircle style={{width: '50%', height: 'auto'}}></Image>
            </OverlayTrigger>
            <OverlayTrigger placement="right" overlay={<Tooltip id="button-tooltip-options">Options</Tooltip>}>
              <Button id="options" className="align-bottom mt-4" variant="link"><i className="bi bi-three-dots text-light" aria-label="Options" style={{fontSize: '1.5rem'}}></i></Button>
            </OverlayTrigger>
          </aside>
        </Col>
        <Col className="mr-4">
          <h1 className="mt-4">Title</h1>
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