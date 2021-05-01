import { Modal, Button, Form, Col, InputGroup } from 'react-bootstrap';
import React, { useState } from 'react';
import DayJs from 'dayjs'

function ModalTask (props) {
    const [validated, setValidated] = useState(false);
    const [description, setDescription] = useState('');
    const [messageDescription, setMessageDescription] = useState('');
    const [important, setImportant] = useState(false);
    const [priv, setPriv] = useState(false);
    const [project, setProject] = useState('');
    const [deadlineDate, setDeadlineDate] = useState('');
    const [deadlineTime, setDeadlineTime] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if(event.currentTarget.checkValidity()) {
            props.addTask({description: description, important: important, private: priv, project: (project==='')? undefined : project, deadline: (deadlineDate==='')? undefined : deadlineDate+'T'+deadlineTime});
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
                    setDescription(event.target.value);
                    setMessageDescription('');
                } else {
                    setMessageDescription('Description length must be less than 50');
                }
                break;
            case 'important':
                setImportant(event.target.checked);
                break;
            case 'priv':
                setPriv(event.target.checked);
                break;
            case 'project':
                setProject(event.target.value);
                break;
            case 'deadline-date':
                setDeadlineDate(event.target.value);
                break;
            case 'deadline-time':
                setDeadlineTime(event.target.value);
                if(deadlineDate === '') {
                    setDeadlineDate(DayJs().format('YYYY-MM-DD'));
                }
                break;
            default:
                break;
        }
    }

    const handleClose = () => {
        setDescription('');
        setMessageDescription('');
        setImportant(false);
        setPriv(false);
        setProject('');
        setDeadlineDate('');
        setDeadlineTime('');
        setValidated(false);
        props.handleClose();
    }

    const handleDelete = () => {
        handleClose();
    }

    return (
        <Modal show={props.show} onHide={handleClose} centered>
            <Modal.Header closeButton><Modal.Title>Add new task</Modal.Title></Modal.Header>
            <Modal.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Description</Form.Label>
                            <Form.Control id='form-description' type='text' placeholder='Description' required value={description} onChange={(e)=>{handleChange('description', e)}}/>
                            <Form.Text className='text-danger'>{messageDescription}</Form.Text>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Check id='form-important' type='switch' label='Important' defaultChecked={false} value={important} onChange={(e)=>{handleChange('important', e)}}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Check id='form-private' type='switch' label='Private' defaultChecked={false} value={priv} onChange={(e)=>{handleChange('priv', e)}}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md='6'>
                            <Form.Label>Project</Form.Label>
                            <Form.Control id='form-project' as='select' value={project} onChange={(e)=>{handleChange('project', e)}}>
                                <option value='' disabled>Choose one...</option>
                                <option>PDS</option>
                                <option>Web Application I</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Deadline</Form.Label>
                            <Form.Control id='form-deadline-date' type='date' name='deadline-date' value={deadlineDate} onChange={(e)=>{handleChange('deadline-date', e)}}/>
                            <Form.Control id='form-deadline-time' type='time' name='deadline-time' value={deadlineTime} onChange={(e)=>{handleChange('deadline-time', e)}}/>
                        </Form.Group>
                    </Form.Row>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={handleClose}>Close</Button>
                        <Button type='submit'>Add</Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default ModalTask;