import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {Button, InputGroup, FormControl, Row, Modal} from 'react-bootstrap';

function Contact() {
    const [showModal, setShowModal] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const {register, handleSubmit, errors} = useForm();
    const onSubmit = (data)=>{
        setFirstName(data.firstname)
        setLastName(data.lastname)
        setShowModal(true);
        // console.log("data: ", data)
    }
    return (
        <div className="container">
           <h1>Contact Page</h1>
           <form onSubmit={handleSubmit(onSubmit)}>
           <div className="row">
           <InputGroup className="mb-3 col-lg-12 col-md-6 col-sm-3">
            <FormControl
              placeholder="Firstname"
              aria-label="Lastname"
              aria-describedby="basic-addon1"
              name="firstname" 
              ref={register}
            />
            </InputGroup>
            <InputGroup className="mb-3 col-lg-12 col-md-6 col-sm-3">
            <FormControl
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              name="lastname" 
              ref={register({required:true})}
            />
            </InputGroup>
            {
                errors.lastname && <small className="text-danger container">last name required </small>
            }
            </div>
               <input variant="success" type="submit"  />
           </form>
               <Modal show={showModal} onHide={()=>setShowModal(false)}>
  <Modal.Header closeButton>
    <Modal.Title>Modal title</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    {firstName && <p>First name: {firstName}</p>}
    {lastName && <p>Last name : {lastName}</p>}
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary" onClick={()=>{setShowModal(false)}}>Close</Button>
    <Button variant="primary" onClick={()=>{setShowModal(false)}}>Ok</Button>
  </Modal.Footer>
</Modal>
        </div>
    )
}

export default Contact;