import { Col, Image, ButtonGroup, Button, Card } from 'react-bootstrap';
import img from './foto.png'
import img2 from './foto2.jpeg'
import React, {useState} from 'react'

function VerticalNavbar(props) {
    let [open,setOpen]=useState(false);
    return (
    <>
    <Col md={1} xs={1} className="p-0">
        <aside className="bg-primary align-items-center text-center mx-auto" id="filter-sidebar" style={{ minHeight: '100vh', minWidth: '100%' }}>
            <div className="d-block d-md-none d-lg-none d-xl-none">
                <Button onClick={()=>setOpen(old=>!old)} id="home" className="mt-4 p-0" variant="link"><i className="bi bi-list-nested text-dark" aria-label="Home" style={{ fontSize: '1.5rem' }}></i></Button>
            </div>
            <div>
                <ButtonGroup vertical className="m-0 w-100 pt-5">
                    <Button id="filter-all" className="p-3  btn-primary" variant="link"><i className="bi bi-inbox text-light d-flex justify-content-center" aria-label="All" style={{ fontSize: '1.5em' }}></i></Button>
                    <Button id="filter-important" className="p-3 btn-primary" variant="link"><i className="bi bi-bookmark-star text-light d-flex justify-content-center" aria-label="Important" style={{ fontSize: '1.5rem' }}></i></Button>
                    <Button id="filter-today" className="p-3 btn-primary" variant="link"><i className="bi bi-sunset text-light d-flex justify-content-center" aria-label="Today" style={{ fontSize: '1.5rem' }}></i></Button>
                    <Button id="filter-week" className="p-3 btn-primary" variant="link"><i className="bi bi-calendar-week text-light d-flex justify-content-center" aria-label="This week" style={{ fontSize: '1.5rem' }}></i></Button>
                    <Button id="filter-private" className="p-3 btn-primary" variant="link"><i className="bi bi-eye-slash text-light d-flex justify-content-center" aria-label="Private" style={{ fontSize: '1.5rem' }}></i></Button>
                    <Button id="filter-search" className="p-3 btn-primary" variant="link"><i className="bi bi-search text-light d-flex justify-content-center" aria-label="Search" style={{ fontSize: '1.5rem' }}></i></Button>
                </ButtonGroup>
            </div>
            <div>
                <Button id="options" className="p-3 btn-primary w-100" variant="link"><i className="bi bi-three-dots text-light d-flex justify-content-center" aria-label="Options" style={{ fontSize: '1.5rem' }}></i></Button>
            </div>
            <div style={{ position: "absolute", bottom: "2rem" }} className="p-0">
                <Image src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" roundedCircle style={{ width: '65%', height: 'auto' }}></Image>
            </div>
        </aside>
    </Col>
    <Col md={3} className="collapse bg-light align-items-center text-center d-md-block">
    <div className="overflow-auto">
      <div className="d-flex justify-content-center pt-3">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>Web Application I</Card.Title>
            <Card.Text>
                                The course aims at presenting the main techniques for creating distributed web applications.
        </Card.Text>
            <Button variant="primary">Visualize</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="d-flex justify-content-center pt-3">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img2} />
          <Card.Body>
            <Card.Title>Programmazione Di Sistema</Card.Title>
            <Card.Text>
                                Il corso si articola in due parti: la prima affronta gli
                                aspetti interni ...
        </Card.Text>
            <Button variant="primary">Visualize</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  </Col></>);
}

export default VerticalNavbar;