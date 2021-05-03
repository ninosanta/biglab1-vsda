import { Modal, Button, Form, Col } from 'react-bootstrap';
import React, { useState } from 'react';
import dayjs from 'dayjs';
import { Redirect, useLocation } from 'react-router';

function ModalTask(props) {

    const location = useLocation();

    const [submitted, setSubmitted] = useState(false);
    const [validated, setValidated] = useState(false);

    const [description, setDescription] = useState(location.state ? location.state.task.description : '');
    const [completed, setCompleted] = useState(location.state ? location.state.task.completed === 'true' || location.state.task.completed === true : '');
    const [important, setImportant] = useState(location.state ? location.state.task.important === 'true' || location.state.task.important === true : false);
    const [messageDescription, setMessageDescription] = useState('');
    const [priv, setPriv] = useState(location.state ? location.state.task.private === 'true' || location.state.task.private === true : false);
    const [project, setProject] = useState(location.state ? location.state.task.project : '');
    const [deadline, setDeadline] = useState(location.state ? location.state.task.deadline : 'T');

    /*const [completed, setCompleted] = useState(props.task?.id ? props.task.completed === 'true' || props.task.completed === true : false);
    const [description, setDescription] = useState(props.task?.id ? props.task.description : '');
    const [messageDescription, setMessageDescription] = useState('');
    const [important, setImportant] = useState(props.task?.id ? props.task.important === 'true' || props.task.important === true : false);
    const [priv, setPriv] = useState(props.task?.id ? props.task.private === 'true' || props.task.private === true : false);
    const [project, setProject] = useState(props.task?.id ? props.task.project : '');
    const [deadline, setDeadline] = useState(props.task?.id ? props.task.deadline : 'T');*/

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (event.currentTarget.checkValidity()) {
            if (location.state)
                props.handleTaskList.editTask({ id: location.state.task.id, completed: completed, description: description, important: important, private: priv, project: project, deadline: (deadline !== 'T') ? deadline : '' });
            else
                props.handleTaskList.addTask({ completed: completed, description: description, important: important, private: priv, project: project, deadline: (deadline !== 'T') ? deadline : '' });
            handleClose();
        } else {
            setValidated(true);
        }
    }

    const handleChange = (component, event) => {
        setValidated(false);
        switch (component) {
            case 'description':
                if (event.target.value.length < 50) {
                    setDescription(event.target.value)
                    setMessageDescription('');
                } else {
                    setMessageDescription('Description length must be less than 50');
                }
                break;
            case 'important':
                setImportant(event.target.checked);
                break;
            case 'private':
                setPriv(event.target.checked);
                break;
            case 'project':
                setProject(event.target.value);
                break;
            case 'deadline-date':
                setDeadline(`${event.target.value}T${(!deadline.split('T')[1] || deadline.split('T')[1] === '') ? '00:00' : deadline.split('T')[1]}`);
                break;
            case 'deadline-time':
                setDeadline(`${(deadline.split('T')[0] === '') ? dayjs().format('YYYY-MM-DD') : deadline.split('T')[0]}T${event.target.value}`);
                break;
            default: // clear
                setDescription('');
                setMessageDescription('');
                setImportant(false);
                setPriv(false);
                setProject('');
                setDeadline('T');
                break;
        }
    }

    const handleClose = () => {
        setValidated(false);
        setSubmitted(true);
        //handleChange(); // no need to reset fields
        //props.handleModalTask(false, undefined);
    }

    const handleDelete = (id) => {
        props.handleTaskList.deleteTask(id);
        handleClose();
    }

    return (
        <>
            {submitted ?
                <Redirect to="/" /> :
                <Form noValidate validated={validated} onSubmit={handleSubmit} className="p-5 col-lg-8">
                    <Form.Label><h2>{location.state ? 'Edit Task' : 'Add new task'}</h2></Form.Label>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Description</Form.Label>
                            <Form.Control id='form-description' type='text' placeholder='Description' required value={description} onChange={(e) => { handleChange('description', e) }} />
                            <Form.Text className='text-danger'>{messageDescription}</Form.Text>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Check id='form-important' type='switch' label='Important' defaultChecked={important} value={important} onChange={(e) => { handleChange('important', e) }} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Check id='form-private' type='switch' label='Private' defaultChecked={priv} value={priv} onChange={(e) => { handleChange('private', e) }} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md='6'>
                            <Form.Label>Project</Form.Label>
                            <Form.Control id='form-project' as='select' value={project} onChange={(e) => { handleChange('project', e) }}>
                                <option value='' disabled>Choose one...</option>
                                <option value='PDS'>PDS</option>
                                <option value='Web Application I'>Web Application I</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Deadline</Form.Label>
                            <Form.Control id='form-deadline-date' type='date' name='deadline-date' value={deadline.split('T')[0]} onChange={(e) => { handleChange('deadline-date', e) }} />
                            <Form.Control id='form-deadline-time' type='time' name='deadline-time' value={deadline.split('T')[1]} onChange={(e) => { handleChange('deadline-time', e) }} />
                        </Form.Group>
                    </Form.Row>
                    <Modal.Footer>
                        {location.state ? <Button variant='danger' onClick={() => handleDelete(location.state.task.id)}>Delete</Button> : <></>}
                        <Button variant='secondary' onClick={handleClose}>Close</Button>
                        <Button type='submit'>{location.state ? 'Save' : 'Add'}</Button>
                    </Modal.Footer>
                </Form>
            }
        </>
    );
}

export default ModalTask;