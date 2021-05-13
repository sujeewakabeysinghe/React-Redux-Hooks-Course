import React from 'react';

class four extends React.Component {

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
        return (
            <div>
                <button onClick = {this.toggleHandler}>Toggle this!</button>
                { this.state.nowState ?
                    <div>
                        <h1>True!</h1>
                    </div>
                    :
                    <div>
                        <h1>False!</h1>
                    </div>
                }
            </div>
        );
    }
}

export default four;