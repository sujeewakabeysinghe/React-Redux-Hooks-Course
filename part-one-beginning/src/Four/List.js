import React from 'react';

class List extends React.Component{
    state = {
        person : [
            { id : 'wdqwd', name : 'Sujeewa' },
            { id : 'dwdqw', name : 'Kasun' },
            { id : 'acaca', name : 'Praween' }
        ]
    }

    delete = (index) => {
        //const per = this.state.person;
        //const per = this.state.person.slice();
        const per = [...this.state.person] //modern approuch

        per.splice(index,1);
        this.setState({
            person : per
        })
        console.log(index); //index is not good key for key property coz it's changing with clicks
    }

    render(){
        var list = this.state.person.map((trunToList, index) => <li key={trunToList.id} onClick = {this.delete.bind(this,(index))}>{trunToList.name}</li>);

        return (
            <div>{list}</div>
        );
    }
}

export default List;