import React from 'react';
import "./TodoList.css";

export default class TodoItems extends React.Component{
    createTask(item){
        return <li key={item.key}> {item.text} </li>
    }
    render(){
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTask);
        return(
            <ul className="theList">
                {listItems}
            </ul>
        );
    }
};