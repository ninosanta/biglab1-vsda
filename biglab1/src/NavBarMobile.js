import { Nav, Button, Form, FormControl, Image } from 'react-bootstrap';

function NavBarMobile(props) {
    

    return (
        <Nav id="mobile-navbar" bg="primary" className="d-inline-flex w-100">
            <Button onClick={() => {props.setOpen(!props.open)}}><i className="bi bi-list-nested text-light" aria-label="Home" style={{ fontSize: '1.5rem' }}></i></Button>
            <Form inline>
                <FormControl
                    autoFocus
                    className="ms-auto w-auto"
                    placeholder="Type to filter..."
                    onChange={(e) => {if(e.target.value !== '')document.getElementById('filter-title').innerText = e.target.value;}}
                />
            </Form>
            <div style={{ position: "absolute", right: "1rem" }}>
                <Image src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" roundedCircle style={{ height: '2.5rem', width: 'auto' }}></Image>
            </div>
        </Nav>);
}

export default NavBarMobile;