import { Rating } from '@mui/material';
import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { v4 as uuidv4 } from "uuid";

function AddMovie({mymovie}) {

    const [newMovie,setNewMovie]=useState({
        id: uuidv4(),
        title: "",
        description : "",
        posterUrl:"",
        rating: 0,
    })
    const [show, setShow] = useState(false);
    const handleChange=(e)=>{
        setNewMovie({...newMovie,[e.target.name]:e.target.value})
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const handleAddMovie=()=>{
        mymovie(newMovie);
        handleClose();
    }
  
    return ( 
        <div>
            <Button onClick={handleShow}>
        Add Your Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Hello! you can add your Movie. </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control onChange={handleChange} name="title" type="Text" placeholder="Enter Your Title" />  
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Label>Description</Form.Label>
        <Form.Control onChange={handleChange} name="description" type="Text" placeholder="Enter Your Description" />  
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Label>PosterUrl</Form.Label>
        <Form.Control onChange={handleChange} name="posterUrl" type="Text" placeholder="Enter Your PosterUrl" />  
      </Form.Group>
      
     
        <Rating
  name="simple-controlled"
  defaultValue={0}
  max={10}
  onChange={(event, newValue) => {
    setNewMovie({...newMovie,rating:newValue})
  }}
/>

      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddMovie}>
            Add Movie 
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
     );
}

export default AddMovie;