import { Modal, Button, Form, Col } from 'react-bootstrap';
import React, { useState } from 'react';
import dayjs from 'dayjs';

const emptyTask = {id: undefined, completed: false, description: '', important: false, private: false, project: '', deadline: 'T'};

function ModalTask (props) {
    const [validated, setValidated] = useState(false);
    const [task, setTask] = useState(emptyTask);
    const [messageDescription, setMessageDescription] = useState('');

    const handleEdit = () => {
        setTask(props.taskToEdit);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if(event.currentTarget.checkValidity()) {
            if(props.taskToEdit?.id)
                props.editTask({id: props.taskToEdit.id, completed: task.completed, description: task.description, important: task.important, private: task.private, project: task.project, deadline: task.deadline});
            else
                props.addTask(task);
            handleClose();
        } else {
            setValidated(true);
        }
    }

    const handleChange = (component, event) => {
        setValidated(false);
        switch(component){
            case 'description':
                if(event.target.value.length < 50){
                    setTask({id: task.id, completed: task.completed, description: event.target.value, important: task.important, private: task.private, project: task.project, deadline: task.deadline});
                    setMessageDescription('');
                } else {
                    setMessageDescription('Description length must be less than 50');
                }
                break;
            case 'important':
                setTask({id: task.id, completed: task.completed, description: task.description, important: event.target.checked, private: task.private, project: task.project, deadline: task.deadline});
                break;
            case 'private':
                setTask({id: task.id, completed: task.completed, description: task.description, important: task.important, private: event.target.checked, project: task.project, deadline: task.deadline});
                break;
            case 'project':
                setTask({id: task.id, completed: task.completed, description: task.description, important: task.important, private: task.private, project: event.target.value, deadline: task.deadline});
                break;
            case 'deadline-date':
                const deadlineDate = `${event.target.value}T${(task.deadline.split('T')[1] === '')? '24:00' : task.deadline.split('T')[1]}`;
                setTask({id: task.id, completed: task.completed, description: task.description, important: task.important, private: task.private, project: task.project, deadline: deadlineDate});
                break;
            case 'deadline-time':
                const deadlineTime = `${(task.deadline.split('T')[0] === '')? dayjs().format('YYYY-MM-DD') : task.deadline.split('T')[0]}T${event.target.value}`;
                setTask({id: task.id, completed: task.completed, description: task.description, important: task.important, private: task.private, project: task.project, deadline: deadlineTime});
                break;
            default: // clear task
                setTask(emptyTask);
                break;
        }
    }

    const handleClose = () => {
        props.setTaskToEdit(undefined);
        setValidated(false);
        handleChange();
        props.handleClose();
    }

    const handleDelete = (id) => {
        props.deleteTask(id);
        handleClose();
    }

    return (
        <Modal show={props.show} onHide={handleClose} centered>
            <Modal.Header closeButton><Modal.Title>{props.taskToEdit?.id? 'Edit Task' : 'Add new task'}</Modal.Title></Modal.Header>
            <Modal.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Description</Form.Label>
                            <Form.Control id='form-description' type='text' placeholder='Description' required value={task.description} onChange={(e)=>{handleChange('description', e)}}/>
                            <Form.Text className='text-danger'>{messageDescription}</Form.Text>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Check id='form-important' type='switch' label='Important' defaultChecked={false} value={task.important} onChange={(e)=>{handleChange('important', e)}}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Check id='form-private' type='switch' label='Private' defaultChecked={false} value={task.private} onChange={(e)=>{handleChange('private', e)}}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md='6'>
                            <Form.Label>Project</Form.Label>
                            <Form.Control id='form-project' as='select' value={task.project} onChange={(e)=>{handleChange('project', e)}}>
                                <option value='' disabled>Choose one...</option>
                                <option>PDS</option>
                                <option>Web Application I</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Deadline</Form.Label>
                            <Form.Control id='form-deadline-date' type='date' name='deadline-date' value={task.deadline.split('T')[0]} onChange={(e)=>{handleChange('deadline-date', e)}}/>
                            <Form.Control id='form-deadline-time' type='time' name='deadline-time' value={task.deadline.split('T')[1]} onChange={(e)=>{handleChange('deadline-time', e)}}/>
                        </Form.Group>
                    </Form.Row>
                    <Modal.Footer>
                        <DeleteButton handleDelete={handleDelete} taskToEdit={props.taskToEdit}/>
                        <Button variant='secondary' onClick={handleClose}>Close</Button>
                        <Button type='submit'>Add</Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

function DeleteButton (props) {
    if(props.taskToEdit?.id)
        return <Button variant='danger' onClick={props.handleDelete}>Delete</Button>
    return (<></>);
}

export default ModalTask;