import React from 'react';
import Scores from './Scores';
import { Card,} from 'react-bootstrap';


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
<>
<div>name: {props.name}</div>
<div>bio: {props.bio}</div>
{scores}
</>
  )
}

export default Students;