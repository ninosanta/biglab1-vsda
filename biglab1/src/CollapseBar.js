import { Nav, OverlayTrigger, Popover, FormControl, Image, ButtonGroup, Button, Col, Collapse } from 'react-bootstrap';

function CollapseBar(props) {
    return (
        <Collapse in={props.open}>
            <Col xs={1} className="collapse bg-light align-items-center text-center p-0">
                <Nav id="filter-navbar2" className="collapse d-flex flex-column bg-light position-fixed text-center" style={{ minHeight: '100%', width: '5rem' }}>
                    <ButtonGroup vertical className="w-100 pt-5 align-items-center">
                        {props.filters.map(filter => {
                            return <Button
                                id={`filter-${filter.label}2`}
                                key={`filter-${filter.label}2`}
                                className="pt-3 pb-3 btn-light text-dark"
                                variant="link"
                                block
                                onClick={() => { document.getElementById('filter-title').innerText = filter.label; }}>
                                <i className={`bi bi-${filter.icon} d-flex justify-content-center`} aria-label={filter.label} style={{ fontSize: '1.5em' }}></i>
                            </Button>;
                        })}

                        <OverlayTrigger placement="right" overlay={
                            <Popover id="search-popover2">
                                <Popover.Title as="h3">Search task</Popover.Title>
                                <Popover.Content>
                                    <FormControl
                                        autoFocus
                                        className="mx-2 w-auto"
                                        placeholder="Type to filter..."
                                        onChange={(e) => { if (e.target.value.length >= 1 && e.target.value.length <= 15) document.getElementById('filter-title').innerText = e.target.value; }}
                                    />
                                </Popover.Content>
                            </Popover>
                        }>
                            <Button id="search2" key="search2" className="pt-3 pb-3 btn-light text-dark" variant="link" block><i className="bi bi-search d-flex justify-content-center" aria-label="Search" style={{ fontSize: '1.5rem' }}></i></Button>
                        </OverlayTrigger>

                        <Button id="options2" key="options2" className="pt-3 pb-3 btn-light  text-dark" variant="link" block><i className="bi bi-three-dots d-flex justify-content-center" aria-label="Options" style={{ fontSize: '1.5rem' }}></i></Button>
                    </ButtonGroup>

                    <div style={{ position: "absolute", bottom: "2rem" }} className="pe-auto">
                        <Image src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" roundedCircle style={{ width: '65%', height: 'auto' }}></Image>
                    </div>
                </Nav>
            </Col>
        </Collapse>);
}

export default CollapseBar;
