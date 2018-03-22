import React from 'react';
import "./TodoList.css";
import FlipMove from "react-flip-move";

export default class TodoItems extends React.Component{
    constructor(props){
        super(props);
        this.delete = this.delete.bind(this);
        this.createTask = this.createTask.bind(this);
    }
    delete(key){
        this.props.delete(key);
    }
    createTask(item){
        return <li onClick={() => this.delete(item.key)} key={item.key}> {item.text} </li>
    }
    render(){
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTask);
        return(
            <ul className="theList">
                <FlipMove duration={250} easing="ease-out">
                    {listItems}
                </FlipMove>
            </ul>
        );
    }
};