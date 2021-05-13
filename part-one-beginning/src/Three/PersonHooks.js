import React, { useState } from 'react';
import Person from './Person'

const PersonHooks = () => {
  const [personState, setPersonState] = useState({
    person : [
        {name : 'Sujeewa',age : 26}
    ]
  });

  const clickHandler = () => {
    setPersonState({
        person : [
            {name : 'Akiba',age : 625}
        ]
    });
}

  return (
    <div>
        <Person click={clickHandler} person='person' name={personState.person[0].name}/>
        <button onClick = {clickHandler}>Click This!</button>
        <h1>My name is {personState.person[0].name}, I'm {personState.person[0].age} years old.</h1>
    </div>
  );
}

export default PersonHooks;