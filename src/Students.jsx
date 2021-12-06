import React from 'react';
import score from './Score';
import { Card, Button } from 'react-bootstrap';


const Students = (props) => {
  return(
<Card style={{ width: '50rem' }}>
<Card.Title>name: {props.name}</Card.Title>
<Card.Body>bio: {props.bio}</Card.Body>
<score {...props.score}/>
</Card>
  )
}

export default Students;