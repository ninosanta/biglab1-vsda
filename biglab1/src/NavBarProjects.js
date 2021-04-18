import { Collapse, Col, Button, Card } from 'react-bootstrap';
import img from './foto.png';
import img2 from './foto2.jpeg';


function NavBarProjects(props) {
    return (
        <Collapse id="projects-navbar" in={props.open}>
            <Col md={3} xs={3} className="collapse bg-light align-items-center text-center d-md-block">
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
            </Col>
        </Collapse>);
}

export default NavBarProjects;