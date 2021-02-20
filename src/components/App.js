import React, { Component } from 'react';
import './App.css';
import TaskList from './TaskList/TaskList'

let keyNum=0;
class App extends Component {
    constructor() {
        super();
        this.state = {
            task: {content:'', checked: false, key: keyNum},
            taskList: []
        }
    }

    taskChange = (event) => {
        const { name, value } = event.target;
        console.log(keyNum);
        this.setState(prevState=>({ [name]: {content: value, checked: false, key: prevState.task.key }}))
        
    }
    addTask = () => {
        // console.log(!!this.state.task.content,keyNum)
        if (this.state.task.content) {
            this.setState(prevState => ({
                taskList: [...prevState.taskList, this.state.task],
                task: {content:'', todo: true, key: keyNum}
            }));
            keyNum++;
        }
        // console.log(this.state.taskList)
    }

    render() {
        console.log(this.state.taskList)
        return (

            <div className='App'>
                <div className='NewTask'>
                    <input onChange={this.taskChange} placeholder='your task' type="text" name='task' value={this.state.task.content} />
                    <div onClick={this.addTask} className='addNewTask'>ADD</div>
                </div>
                <TaskList taskList={this.state.taskList} />
            </div>
        );
    }
}

export default App;
