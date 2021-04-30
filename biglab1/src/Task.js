import { useState } from "react";
import { ListGroup, Badge, Form, Row, Col } from "react-bootstrap";
import DayJS from 'react-dayjs';

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
    const [tasks, setTasks] = useState(props.tasks) ;

    const deleteTask = (id) => {
        setTasks( oldTask => oldTask.filter(task => task.id !== id) ) ;
    }

    const editTask = (id) => {
        
    }

    return (
        <ListGroup variant="flush">
            {
                tasks.map( (task) => 
                    <Task
                        key={`task-${task.id}`}
                        id={task.id}
                        completed={task.completed === 'true'}
                        description={task.description || 'New Task'}
                        important={task.important === 'true'}
                        project={task.project}
                        private={task.private === 'true'}
                        deadline={task.deadline}
                        deleteTask={deleteTask}
                    />)
            }
        </ListGroup>
    );
}

function Task(props) {
    const taskId = props.id;
    const [taskCompleted, setCompleted] = useState(props.completed);
    const [taskDescription, setDescription] = useState(props.description);
    const [taskImportant, setImportant] = useState(props.important);
    const [taskProject, setProject] = useState(props.project);
    const [taskPrivate, setPrivate] = useState(props.private);
    const [taskDeadline, setDeadline] = useState(props.deadline);

    return (
        <Row >
            <ListGroup.Item id={`task-${taskId}`} className="list-group-item d-flex w-100" action>
                <Col sm={10}>
                    <Row>
                        <Col sm={4}> <TaskDescription id={taskId} completed={taskCompleted} description={taskDescription} setCompleted={ event => setCompleted(event.target.checked) } important={taskImportant}/> </Col>
                        <Col sm={1}> <TaskPrivateIcon id={taskId} private={taskPrivate}/> </Col>
                        <Col>
                            <Row>
                                <Col className="d-flex d-inline-flex"> <TaskProject id={taskId} project={taskProject}/> </Col>
                                <Col className="d-flex d-inline-flex"> <TaskDeadline id={taskId} deadline={taskDeadline}/> </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col className="d-flex d-inline-flex flex-row-reverse">
                    <TaskControls id={taskId} deleteTask={props.deleteTask}/>
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
    if(props.private) return (<i id={`task-${props.id}-private`} className="bi bi-eye-slash ml-3" aria-label="Private" variant="secondary" style={{ fontSize: '1em' }}></i>);
    return (<></>);
}

function TaskProject (props) {
    if(props.project) return (
        <Badge id={`task-${props.id}-project`} pill variant="info">
            {props.project}
        </Badge>);
    return (<></>);
}

function TaskDeadline (props) {
    if (props.deadline) return (
        <Badge id={`task-${props.id}-date`} variant="dark">
            <DayJS format="MMMM D, YYYY h:mm A">{props.deadline}</DayJS>
        </Badge>);
    return (<></>);
}

function TaskControls(props) {
    return (
        <Row>
            <div className="pr-2" onClick={() => props.editTask(props.id)}>
                <i id={`task-${props.id}-edit`} className="bi bi-pencil-square text-primary" aria-label="Edit"></i>
            </div>
            <div className="pr-2" onClick={() => props.deleteTask(props.id)}>
                <i id={`task-${props.id}-delete`} className="bi bi-trash text-danger" aria-label="Delete"></i>
            </div>
        </Row>
    );
}

export default TasksList;