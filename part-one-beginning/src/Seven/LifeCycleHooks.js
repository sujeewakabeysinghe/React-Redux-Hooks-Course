import React from 'react';

class LifeCycleHooks extends React.Component {

    constructor(props) {
        super(props);
        console.log('One Constructor!')
    }

    state = {
        name : this.props.name,
        hey : 'hey'
    }

    static getDerivedStateFromProps = (props, state) => {
        console.log('One GetDerivedStateFromProps!');
        return state;
    }

    componentDidMount(){
        console.log('One ComponetDidMount!');
    }

    clickHandler = () => {
        this.setState({
            name : 'Abeysinghe'
        })
    }

    render(){
        console.log('One Render!')
        console.log('Two childLifecycleWillBeExecuteWhichInsideThisReturn!');
        return (
            <div>
                <button onClick = {this.clickHandler}>Click This!</button>
                <h1>Hey! {this.state.name}</h1>
            </div>
        );
    }
}

export default LifeCycleHooks;