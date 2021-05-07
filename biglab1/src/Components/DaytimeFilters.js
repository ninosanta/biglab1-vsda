import { Dropdown, ButtonGroup, ButtonToolbar, Button } from 'react-bootstrap';

function DaytimeFilters (props) {
    return (
        <>
            <ButtonToolbar className='d-none d-sm-block d-lg-block' aria-label='Button toolbar with daytime filters'>
                <ButtonGroup className='mr-2' aria-label='Daytime filters group'>
                    {props.filters.map(tmp => <Button key={`daytime-filters-${tmp}`} variant='primary'>{tmp}</Button>)}
                </ButtonGroup>
            </ButtonToolbar>
            <Dropdown className='d-block d-sm-none d-lg-none'>
                <Dropdown.Toggle id='dropdown-daytime-filters' variant='primary'>Daytime filters</Dropdown.Toggle>
                <Dropdown.Menu>
                    {props.filters.map(tmp => <Dropdown.Item key={`daytime-filters-${tmp}`}>{tmp}</Dropdown.Item>)}
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
}

export default DaytimeFilters;