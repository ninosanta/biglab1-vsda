import { Nav, Navbar, Form, FormControl, Image, Row, Col} from 'react-bootstrap';

function NavBarMobile(props) {
    return (
        <Navbar bg='primary' expand='lg' fixed='top'>
            <Navbar.Brand>
                <Image className='ml-3' src='https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg' roundedCircle style={{ height: '2rem', width: '2rem' }}></Image>
            </Navbar.Brand>
            <Navbar.Toggle style={{border:'none'}} >
                <i className='bi bi-list-nested text-light' aria-label='Home' style={{ fontSize: '1.5rem' }}></i>
            </Navbar.Toggle>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='mr-auto'>
                    {props.filters.map(filter => {
                        return (<Nav.Link
                            key={`filter-mobile-${filter.label}`}
                            id={`filter-mobile-${filter.label}`}
                            className='pl-3 btn-primary text-light'
                            style={{ fontSize: '1.5em' }}
                            title={filter.label}
                            onClick={ () => props.setFilter(filter) }>
                            <Row>
                                <Col md={1} xs={2}><i id={`filter-mobile-${filter.label}-icon`} className={`bi ${(filter.label === props.filters[0].label)? `bi-${filter.icon}-fill` : `bi-${filter.icon}`} d-flex justify-content-center`}  aria-label={filter.label}></i></Col>
                                <Col>{filter.label}</Col>
                            </Row>
                        </Nav.Link>);
                    })}
                    <Nav.Link id='filter-search' className='pl-3  btn-primary text-light' style={{ fontSize: '1.5em' }} title='Search'>
                        <Row>
                            <Col md={1} xs={2}><i className='bi bi-search'></i></Col>
                            <Col>
                                <Form inline>
                                    <FormControl 
                                        type='text' 
                                        placeholder='Type to filter...' 
                                        className='mr-sm-2 w-sm-75' 
                                        onChange={(e) => {
                                            if(e.target.value.length < 1) {
                                                props.setFilter(props.filters[0].label);
                                            } else if(e.target.value.length <= 15) props.setFilter(e.target.value);
                                        }}/>
                                </Form>
                            </Col>
                        </Row>
                    </Nav.Link>
                    <Nav.Link id='options' className='pl-3  btn-primary text-light' style={{ fontSize: '1.5em' }} variant='link'  title='Options'>
                        <Row>
                            <Col md={1} xs={2}><i className='bi bi-three-dots'></i></Col> 
                            <Col>Options</Col>
                        </Row>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>);
}

export default NavBarMobile;