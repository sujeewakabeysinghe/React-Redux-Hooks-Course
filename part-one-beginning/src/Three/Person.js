import React from 'react'

const person = (props) => {
    return (
        <div>
            <h1 onClick={props.click}>I'm {props.person}. My name is {props.name}</h1>
            <b><i>{props.children}</i></b>
        </div>
    )
}

export default person;
