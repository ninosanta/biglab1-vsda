import React, { useState } from 'react';
import { Collapse, Navbar, Nav, ButtonGroup, Button, Form, FormControl, Image } from 'react-bootstrap';

function NavBarMobile(props) {
    const [open, setOpen] = useState(true);

    return (
        <Navbar id="mobile-navbar" bg="primary" className="w-100">
            <Button onClick={() => {}}><i className="bi bi-list-nested text-light" aria-label="Home" style={{ fontSize: '1.5rem' }}></i></Button>
            <Collapse id="basic-navbar-nav" in={open}>
                <Nav id="filter-navbar" className="collapse flex-column bg-primary position-fixed text-center" style={{ minHeight: '100%', width: '5rem'}}>
                    <ButtonGroup vertical className="w-100 pt-5 align-items-center">
                        {props.filters.map(filter => {
                            return <Button
                                id={`filter-${filter.label}`} 
                                key={`filter-${filter.label}`} 
                                className="p-3 btn-primary" 
                                variant="link" 
                                onClick={() => {document.getElementById('filter-title').innerText = filter.label;}}>
                                    <i className={`bi bi-${filter.icon} text-light d-flex justify-content-center`} aria-label={filter.label} style={{ fontSize: '1.5em' }}></i>
                            {filter.label}</Button>;
                        })}
                        
                        <Button id="options" key="options" className="p-3 btn-primary w-100" variant="link"><i className="bi bi-three-dots text-light d-flex justify-content-center" aria-label="Options" style={{ fontSize: '1.5rem' }}></i></Button>
                    </ButtonGroup>
                </Nav>
            </Collapse>
            <Form inline>
                <FormControl
                    autoFocus
                    className="mx-2 w-auto"
                    placeholder="Type to filter..."
                    onChange={(e) => {if(e.target.value !== '')document.getElementById('filter-title').innerText = e.target.value;}}
                />
            </Form>
            <div style={{ position: "absolute", right: "2rem" }} className="p-0">
                <Image src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" roundedCircle style={{ height: '3rem', width: 'auto' }}></Image>
            </div>
        </Navbar>);
}

export default NavBarMobile;