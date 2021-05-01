import { useState } from 'react';
import { ListGroup, Badge, Form, Row, Col } from 'react-bootstrap';
import DayJS from 'react-dayjs';
import getTasks from './Filters'

/**
 function formatDeadline(date){
    if(!date) return '--o--';
    else if(isToday(date)) {
        return date.format('[Today at] HH:mm');
    } else if(isTomorrow(date)) {
        return date.format('[Tomorrow at] HH:mm');
    } else if(isYesterday(date)) {
        return date.format('[Yesterday at] HH:mm');
    } else {
        return date.format('dddd DD MMMM YYYY [at] HH:mm');
    }
} */

function TasksList (props) {
    return (
        <ListGroup variant='flush'>
            {
                getTasks(props.tasks, props.filter).map( (task) => 
                    <Task
                        key={`task-${task.id}`}
                        task={task}
                        handleTaskList={props.handleTaskList}
                    />)
            }
        </ListGroup>
    );
}

function Task(props) {
    const [taskId, setId] = useState(props.task.id);
    const [taskCompleted, setCompleted] = useState(props.task.completed === 'true' || props.task.completed === true);
    const [taskDescription, setDescription] = useState(props.task.description);
    const [taskImportant, setImportant] = useState(props.task.important === 'true' || props.task.important === true);
    const [taskPrivate, setPrivate] = useState(props.task.private === 'true' || props.task.private === true);
    const [taskProject, setProject] = useState(props.task.project);
    const [taskDeadline, setDeadline] = useState(props.task.deadline);

    return (
        <Row >
            <ListGroup.Item id={`task-${taskId}`} className='list-group-item d-flex w-100' action>
                <Col sm={10}>
                    <Row>
                        <Col sm={4}> <TaskDescription id={taskId} completed={taskCompleted} description={taskDescription} setCompleted={ event => setCompleted(event.target.checked) } important={taskImportant}/> </Col>
                        <Col sm={1}> <TaskPrivateIcon id={taskId} private={taskPrivate}/> </Col>
                        <Col>
                            <Row>
                                <Col className='d-flex d-inline-flex'> <TaskProject id={taskId} project={taskProject}/> </Col>
                                <Col className='d-flex d-inline-flex'> <TaskDeadline id={taskId} deadline={taskDeadline}/> </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col className='d-flex d-inline-flex flex-row-reverse'>
                    <TaskControls task={props.task} handleTaskList={props.handleTaskList}/>
                </Col>
            </ListGroup.Item>
        </Row>
    );
}

function TaskDescription (props) {
    return (
        <Form>
            <Form.Check id={`task-${props.id}-checkbox`}>
                <Form.Check.Input type='checkbox' defaultChecked={props.completed} value={props.completed} onChange={props.setCompleted}/>
                <Form.Check.Label className={props.important ? 'text-danger' : ''}>{props.description}</Form.Check.Label>
            </Form.Check>
        </Form>
    );
}

function TaskPrivateIcon (props) {
    if(props.private) return (<i id={`task-${props.id}-private`} className='bi bi-eye-slash ml-3' aria-label='Private' variant='secondary' style={{ fontSize: '1em' }}></i>);
    return (<></>);
}

function TaskProject (props) {
    if(props.project) return (
        <Badge id={`task-${props.id}-project`} pill variant='info'>
            {props.project}
        </Badge>);
    return (<></>);
}

function TaskDeadline (props) {
    if (props.deadline) return (
        <Badge id={`task-${props.id}-date`} variant='dark'>
            <DayJS format='MMMM D, YYYY h:mm A'>{props.deadline}</DayJS>
        </Badge>);
    return (<></>);
}

function TaskControls(props) {
    return (
        <Row>
            <div className='pr-2' onClick={() => props.handleTaskList.setEditTask(props.task)}>
                <i id={`task-${props.id}-edit`} className='bi bi-pencil-square text-primary' aria-label='Edit'></i>
            </div>
            <div className='pr-2' onClick={() => props.handleTaskList.deleteTask(props.task.id)}>
                <i id={`task-${props.id}-delete`} className='bi bi-trash text-danger' aria-label='Delete'></i>
            </div>
        </Row>
    );
}

export default TasksList;