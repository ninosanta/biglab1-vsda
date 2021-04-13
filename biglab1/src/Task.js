import { useState } from "react";
import { ListGroup, Badge, Form } from "react-bootstrap";
import DayJs from 'react-dayjs';

function Task(props) {
    const taskId = props.id;
    const [completed, setCompleted] = useState(props.completed || false);
    const [label, setLabel] = useState(props.label || 'New Task');
    const [projectBadge, setbadge] = useState(props.projectBadge || '');
    const [icon, setIcon] = useState((props.icon)? 
        <svg className="bi bi-person-square" width="1.2em" height="1.2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z" clipRule="evenodd"></path>
            <path fillRule="evenodd" d="M2 15v-1c0-1 1-4 6-4s6 3 6 4v1H2zm6-6a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
        </svg> : '');
    const [date, setDateBadge] = useState(props.date || '');
    const [dateVariant, setDateVariant] = useState(props.dateVariant || 'dark'); // !! date variant must change based on the date
    return (
        <ListGroup.Item id={`task-${taskId}`} className="d-flex w-100 justify-content-between riga.hov" action onClick={()=>{console.log("task clicked")}}>
            <Form>
                <Form.Check id={`task-${taskId}-checkbox`}>
                    <Form.Check.Input type='checkbox' checked={completed} onChange={() => setCompleted(!completed)}/> {/*isInvalid to make it red*/}
                    <Form.Check.Label>{label}</Form.Check.Label>
                </Form.Check>
            </Form>
            <Badge id={`task-${taskId}-project`} pill variant="info">{projectBadge}</Badge>
            <div id={`task-${taskId}-icon`}>{icon}</div>
            <Badge id={`task-${taskId}-date`} variant={dateVariant}><DayJs format="MMMM D, YYYY h:mm A">{ date }</DayJs></Badge>
        </ListGroup.Item>
    );
}

export default Task;