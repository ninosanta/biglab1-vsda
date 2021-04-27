import { useState } from "react";
import { ListGroup, Badge, Form, Row, Col } from "react-bootstrap";
import DayJS from 'react-dayjs';
import {iconDelete, iconPersonSquare, iconEdit} from "./icons";


 /** 
     * Function to check if a date is today. Returns true if the date is today, false otherwise.
     * @param {*} date the javascript Date to be checked
    
function isToday(date){
    const comparisonTemplate = 'YYYY-MM-DD';
    const now = DayJS();
    return date.deadline && (date.deadline.format(comparisonTemplate) === now.format(comparisonTemplate));
} */

/** 
 * Function to check if a date is yesterday. Returns true if the date is yesterday, false otherwise.
 * @param {*} date the javascript Date to be checked
 
function isYesterday(date){
    const comparisonTemplate = 'YYYY-MM-DD';
    const yesterday = DayJS().subtract(1, 'day');
    return date.deadline && (date.deadline.format(comparisonTemplate) === yesterday.format(comparisonTemplate));
}*/

/** 
 * Function to check if a date is tomorrow. Returns true if the date is tomorrow, false otherwise.
 * @param {*} date the javascript Date to be checked
 
 function isTomorrow(date){
    const comparisonTemplate = 'YYYY-MM-DD';
    const tomorrow = DayJS().add(1, 'day');
    return date.deadline && (date.deadline.format(comparisonTemplate) === tomorrow.format(comparisonTemplate));
}*/

/**
 * Function to check if a date is in the next week. Returns true if the date is in the next week, false otherwise.
 * @param {*} date the javascript Date to be checked

 function isNextWeek(date){
     const tomorrow = DayJS().add(1, 'day');
     const nextWeek = DayJS().add(7, 'day');
     const ret = date.deadline && ( !date.deadline.isBefore(tomorrow,'day') && !date.deadline.isAfter(nextWeek,'day') );
     console.dir(date.deadline);
     return ret;
 }

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




function Task(props) {
    const taskId = props.id;
    const [completed, setCompleted] = useState(props.completed || false);
    const [label, setLabel] = useState(props.label || 'New Task');
    const [projectBadge, setbadge] = useState(props.projectBadge || '');
    const [icon, setIcon] = useState((props.icon) ? iconPersonSquare : '');
    const [date, setDateBadge] = useState(props.date || '');
    const [dateVariant, setDateVariant] = useState(props.dateVariant || 'dark'); // !! date variant must change based on the date
    return (
        <Row >
            <ListGroup.Item id={`task-${taskId}`} key={`task-${taskId}`}
                            className="task-list-group-item d-flex w-100 justify-content-between riga.hov" action>
                <Col>
                    <Row>
                        <Col sm={5}>
                            <Form className="pb-3">
                                <Form.Check id={`task-${taskId}-checkbox`}>
                                    <Form.Check.Input type='checkbox'
                                                    checked={completed} onChange={() => setCompleted(!completed)}/> {/*isInvalid to make it red*/}
                                    <Form.Check.Label> {label} </Form.Check.Label>
                                    <span className='ml-3' style={{opacity:'0.6'}} id={`task-${taskId}-icon`}>{icon}</span>
                                </Form.Check>
                                
                            </Form>
                            
                        </Col>
                        <Col>
                            <Row>
                            
                                <Col sm={5}>
                                    <Badge  id={`task-${taskId}-project`} pill variant="info">{projectBadge}</Badge>
                                </Col>
                                <Col>        
                                    <Badge id={`task-${taskId}-date`} variant={dateVariant}>
                                        <DayJS format="MMMM D, YYYY h:mm A">{ date }</DayJS>
                                    </Badge>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>


                <TaskControls taskId={props.id} deleteTask={props.deleteTask}/>
            </ListGroup.Item>
        </Row>
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