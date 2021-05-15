import React from 'react';
import Radium from 'radium';

class dynamicStyle extends React.Component{

    render(){
        const style = {
            color : 'red',
            backgrouondColor : 'yellow',
            ':hover' : {
                color : 'black'
            },
            '@media (min-width : 600px)': {
                width : '300px',
                color : 'green'
            }
        }
        return (
                <div style = {style}>
                    <h1>Sujeewa</h1>
                </div>
        );
    }
}

export default Radium(dynamicStyle);