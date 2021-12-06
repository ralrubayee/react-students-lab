import React from 'react';
import './App.css';
import studentsArr from './StudentsData';
import Students from './Students';


function App() {
  const student = studentsArr.map((ele, index) => {
    return (
      <Students 
      name={ele.name}
      bio={ele.bio}
      score={ele.scores}
      key={index}
      />
    );
  });


  return (
    <div className="App">
      {student}
    </div>
  )
}
export default App;