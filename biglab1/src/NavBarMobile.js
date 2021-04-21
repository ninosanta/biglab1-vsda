import { Nav, Navbar, Button, Form, FormControl, Image, Row, Col} from 'react-bootstrap';

function NavBarMobile(props) {
    return (
        <Navbar bg="primary" expand="lg" fixed="top">
        <Navbar.Brand>
            <Image className="ml-3" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" roundedCircle style={{ height: '2rem', width: '2rem' }}></Image>
        </Navbar.Brand>
        <Navbar.Toggle >
            <i className="bi bi-list-nested text-light" aria-label="Home" style={{ fontSize: '1.5rem' }}></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link id="filter-all" className="pl-3  btn-primary text-light" style={{ fontSize: '1.5em' }} title="All">
                <Row>
                    <Col md={1} xs={2}><i className="bi bi-inbox"></i></Col>
                    <Col>All</Col>
                </Row>
            </Nav.Link>
            <Nav.Link id="filter-important" className="pl-3  btn-primary text-light" style={{ fontSize: '1.5em' }} title="Important">
                <Row>
                    <Col md={1} xs={2}><i className="bi bi-bookmark-star"></i></Col>
                    <Col>Important</Col>
                </Row>
            </Nav.Link>
            <Nav.Link id="filter-today" className="pl-3  btn-primary text-light" style={{ fontSize: '1.5em' }} title="Today">
                <Row>
                    <Col md={1} xs={2}><i className="bi bi-sunset"></i></Col>
                    <Col>Today</Col>
                </Row>
            </Nav.Link>
            <Nav.Link id="filter-week" className="pl-3  btn-primary text-light" style={{ fontSize: '1.5em' }} title="Week">
                <Row>
                    <Col md={1} xs={2}><i className="bi bi-calendar-week"></i></Col>
                    <Col>Week</Col>
                </Row>
            </Nav.Link>
            <Nav.Link id="filter-private" className="pl-3  btn-primary text-light" style={{ fontSize: '1.5em' }} title="Private">
                <Row>
                    <Col md={1} xs={2}><i className="bi bi-eye-slash"></i></Col>
                    <Col>Private</Col>
                </Row>
            </Nav.Link>
            <Nav.Link id="filter-search" className="pl-3  btn-primary text-light" style={{ fontSize: '1.5em' }} title="Search">
                <Row>
                    <Col md={1} xs={2}><i className="bi bi-search"></i></Col>
                    <Col>
                        <Form inline>
                            <FormControl type="text" placeholder="Type to filter..." className="mr-sm-2 w-sm-75" />
                        </Form>
                    </Col>
                </Row>
            </Nav.Link>
            <Nav.Link id="options" className="pl-3  btn-primary text-light" style={{ fontSize: '1.5em' }} variant="link"  title="Options">
                <Row>
                    <Col md={1} xs={2}><i className="bi bi-three-dots"></i></Col> 
                    <Col>Options</Col>
                </Row>
            </Nav.Link>
            
            </Nav>
            
        </Navbar.Collapse>
        </Navbar>);
}

export default NavBarMobile;