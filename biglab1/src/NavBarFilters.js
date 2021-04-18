import { Nav, OverlayTrigger, Popover, FormControl, Image, ButtonGroup, Button } from 'react-bootstrap';

function NavBarFilters(props) {
    return (
        <Nav id="filter-navbar" className="flex-column bg-primary position-fixed text-center" style={{ minHeight: '100%', width: '5rem' }}>
            <ButtonGroup vertical className="w-100 pt-5 align-items-center">
                {props.filters.map(filter => {
                    return <Button
                        id={`filter-${filter.label}`} 
                        key={`filter-${filter.label}`} 
                        className="p-3 btn-primary text-light" 
                        variant="link" 
                        block
                        onClick={() => {document.getElementById('filter-title').innerText = filter.label;}}>
                            <i className={`bi bi-${filter.icon} d-flex justify-content-center`} aria-label={filter.label} style={{ fontSize: '1.5em' }}></i>
                    </Button>;
                })}
                
                <OverlayTrigger placement="right" overlay={
                    <Popover id="search-popover">
                        <Popover.Title as="h3">Search task</Popover.Title>
                        <Popover.Content>
                            <FormControl
                                autoFocus
                                className="mx-2 w-auto"
                                placeholder="Type to filter..."
                                onChange={(e) => {if(e.target.value !== '')document.getElementById('filter-title').innerText = e.target.value;}}
                            />
                        </Popover.Content>
                    </Popover>
                }>
                    <Button id="search" key="search" className="p-3 btn-primary text-light" variant="link" block><i className="bi bi-search d-flex justify-content-center" aria-label="Search" style={{ fontSize: '1.5rem' }}></i></Button>
                </OverlayTrigger>
                
                <Button id="options" key="options" className="p-3 btn-primary  text-light" variant="link" block><i className="bi bi-three-dots d-flex justify-content-center" aria-label="Options" style={{ fontSize: '1.5rem' }}></i></Button>
            </ButtonGroup>

            <div style={{ position: "absolute", bottom: "2rem" }} className="p-0">
                <Image src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" roundedCircle style={{ width: '65%', height: 'auto' }}></Image>
            </div>
        </Nav>);
}

export default NavBarFilters;
