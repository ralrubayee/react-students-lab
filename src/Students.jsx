import React, {Component} from "react"
import Scores from './Scores';
import './App.css';
import Card from "react-bootstrap/Card";


const Students = (props) => {
  const scores = props.scores.map((ele, index) => {
    return (
      <Scores 
      date={ele.date}
      score={ele.score}
      key={index}
      />
    );
  });

  return(

<Card style={{ width: '40rem' }}>
  <Card.Body>
<Card.Title>name: {props.name}</Card.Title>
<Card.Text>bio: {props.bio}</Card.Text>
<Card.Text>
{scores}
</Card.Text>
</Card.Body>
</Card>
 )
}

export default Students;