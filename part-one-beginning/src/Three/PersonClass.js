import React from 'react'

class PersonClass extends React.Component{

    state = {
        person : [
            {name : 'Sujeewa',age : 26}
        ]
    }

    clickHandler = () => {
        this.setState({
            person : [
                {name : 'Akiba',age : 625}
            ]
        })
    }

    render(){
        return (
            <div>
                <button onClick = {this.clickHandler}>Click This!</button>
                <h1>My name is {this.state.person[0].name}, I'm {this.state.person[0].age} years old.</h1>
            </div>
        )
    }
}

export default PersonClass;