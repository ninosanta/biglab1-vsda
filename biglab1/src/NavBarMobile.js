import { Nav, Navbar, Button, Form, FormControl, Image } from 'react-bootstrap';

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
            <Nav.Link id="filter-all" className="pl-3  btn-primary " title="All"><i className="bi bi-inbox text-light d-flex justify-content-left" aria-label="All" style={{ fontSize: '1.5em' }}></i> All</Nav.Link>
            <Nav.Link id="filter-important" className="pl-3 btn-primary" variant="link" title="Important"><i className="bi bi-bookmark-star text-light d-flex justify-content-left" aria-label="Important" style={{ fontSize: '1.5rem' }}></i></Nav.Link>
            <Nav.Link id="filter-today" className="pl-3 btn-primary" title="Today"><i className="bi bi-sunset text-light d-flex justify-content-left" aria-label="Today" style={{ fontSize: '1.5rem' }}></i></Nav.Link>
            <Nav.Link id="filter-week" className="pl-3 btn-primary" title="Week"><i className="bi bi-calendar-week text-light d-flex justify-content-left" aria-label="This week" style={{ fontSize: '1.5rem' }}></i></Nav.Link>
            <Nav.Link id="filter-private" className="pl-3 btn-primary" title="Private"><i className="bi bi-eye-slash text-light d-flex justify-content-left" aria-label="Private" style={{ fontSize: '1.5rem' }}></i></Nav.Link>
            <Nav.Link id="filter-search" className="pl-3 btn-primary" title="Search"><i className="bi bi-search text-light d-flex justify-content-left" aria-label="Search" style={{ fontSize: '1.5rem' }}></i>
            <Form inline>
            <FormControl type="text" placeholder="Type to filter..." className="mr-sm-2 w-50" />
            </Form>
            </Nav.Link>
            <Nav.Link id="options" className="pl-3 btn-primary w-100" variant="link"  title="Options"><i className="bi bi-three-dots text-light d-flex justify-content-left" aria-label="Options" style={{ fontSize: '1.5rem' }}></i></Nav.Link>
            
            </Nav>
            
        </Navbar.Collapse>
        </Navbar>);
}

export default NavBarMobile;