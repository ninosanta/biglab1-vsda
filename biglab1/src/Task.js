import { useState } from "react";
import { ListGroup, Badge, Form, Row, Col } from "react-bootstrap";
import DayJS from 'react-dayjs';
import {iconDelete, iconPersonSquare, iconEdit} from "./icons";

function Task(props) {
    const taskId = props.id;
    const [completed, setCompleted] = useState(props.completed || false);
    const [label, setLabel] = useState(props.label || 'New Task');
    const [projectBadge, setbadge] = useState(props.projectBadge || '');
    const [icon, setIcon] = useState((props.icon) ? iconPersonSquare : '');
    const [date, setDateBadge] = useState(props.date || '');
    const [dateVariant, setDateVariant] = useState(props.dateVariant || 'dark'); // !! date variant must change based on the date
    return (
        <Row>
            <ListGroup.Item id={`task-${taskId}`} key={`task-${taskId}`}
                            className="task-list-group-item d-flex w-100 justify-content-between riga.hov" action>
                <Col sm={5}>
                    <Form>
                        <Form.Check id={`task-${taskId}-checkbox`}>
                            <Form.Check.Input type='checkbox'
                                              checked={completed} onChange={() => setCompleted(!completed)}/> {/*isInvalid to make it red*/}
                            <Form.Check.Label> {label} </Form.Check.Label>
                        </Form.Check>
                    </Form>
                </Col>
                <Col>
                    <Badge id={`task-${taskId}-project`} pill variant="info">{projectBadge}</Badge>
                </Col>
                <Col sm={1}>
                    <div id={`task-${taskId}-icon`}>{icon}</div>
                </Col>
                <Col>
                    <Badge id={`task-${taskId}-date`} variant={dateVariant}>
                        <DayJS format="MMMM D, YYYY h:mm A">{ date }</DayJS>
                    </Badge>
                </Col>
                <TaskControls taskId={props.id} deleteTask={props.deleteTask}/>
            </ListGroup.Item>
        </Row>
    );
}

function TasksList(props) {
    const [tasks, setTasks] = useState(props.tasks) ;

    const deleteTask = (id) => {
        setTasks( oldTask => oldTask.filter(task => task.id !== id) ) ;
    }

    return (

        <ListGroup variant="flush">
            {
                tasks.map( (task) => <
                    Task
                    id={task.id}
                    key={`task-obj-${task.id}`}
                    label={task.label}
                    projectBadge={task.projectBadge}
                    completed={task.completed === 'true'}
                    dateBadge={task.dateBadge}
                    date={task.date}
                    icon={task.icon}
                    dateVariant={task.dateVariant}

                    deleteTask={deleteTask}
                />)
            }
        </ListGroup>
    );
}


function TaskControls(props) {
    return (
        <>
            <span>
                {iconEdit}
            </span>
            <span onClick={() => props.deleteTask(props.taskId)}>
                {iconDelete}
            </span>
        </>
    );
}

export default TasksList;