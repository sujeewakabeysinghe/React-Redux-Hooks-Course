import React from 'react';

class fourAnotherConditionalMeth extends React.Component {

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
        let shoowIt = null;

        if(this.state.nowState){
            shoowIt = (
                <div>
                    <h1>True!</h1>
                </div>
            );
        }
        else{
            shoowIt = (
                <div>
                    <h1>False!</h1>
                </div>
            );
        }
        return (
            <div>
                <button onClick = {this.toggleHandler}>Toggle This!</button>
                {shoowIt}
            </div>
        );
    }
}

export default fourAnotherConditionalMeth;