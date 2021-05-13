import React from 'react';
import Radium from 'radium'

class dynamicStyle extends React.Component{

    state = {
        nowState : true
    }

    toggleHandler = () => {
        const show = this.state.nowState
        this.setState({
            nowState : !show
        })
        console.log('works!');
    }

    render(){
        var shoowIt = null;
        const style = {
            color : 'red',
            ':hover' : {
                color : 'black'
            }
        }

        if(this.state.nowState){
            shoowIt = (<h1>True!</h1>);
            style.color = 'green'
            style[':hover'] = {
                color : 'yellow'
            }
        }
        else{
            shoowIt = (<h1>False!</h1>);
        }
        return (
            <div>
                <button onClick = {this.toggleHandler}>Toggle This!</button>
                <div style = {style}>{shoowIt}</div>
            </div>
        );
    }
}

export default Radium(dynamicStyle);