import React from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";

export class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: []
        };
        this.addItem = this.addItem.bind(this);
    }
    addItem(e){
        if(this._inputElement.value !== ""){
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            }
            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
            this._inputElement.value = "";
        };
        console.log(this.state.items);
        e.preventDefault();
        
    }
    render(){
        return(
            <div className="TodoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a} placeholder="enter task"/>
                        <button type="submit">add</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items} />
            </div>
        );
    }
}