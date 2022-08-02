import React from "react";
import {Form} from 'react-bootstrap';
import { Rating } from '@mui/material';

function MovieFilter({search,rate,Rate}) {
    return ( 
<div className="form">
    <Form >
      <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Control className="enter" onChange={(e)=>search(e.target.value)} name="title" type="Text" placeholder="Enter Your Title" />  
      </Form.Group>
    </Form>
<Rating
  name="simple-controlled"
  defaultValue={Rate}
  max={10}
  onChange={(event, newValue) => {
    rate(newValue)
  }}
/>
</div>
     );
}

export default MovieFilter;