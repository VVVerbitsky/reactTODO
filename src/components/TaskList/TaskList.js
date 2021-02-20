import React, { Component } from 'react';
import './TaskList.css'
import Task from './Task'

// console.log(taskArr)
class TaskList extends Component {
    constructor(props){
        super(props);
        this.state={
            // taskList: props.taskList
        };
    }
    // log=()=>{this.render()}

    // componentDidMount(){
    //     this.setState({taskArrs: taskArr})
    // }


    render() { //rerendering on every App`s input change time??even when taskList is the same??
        let check=this.props.taskList.map(item=>
            <Task
                content={item.content} 
                key={item.key}
                />);
        // console.log('check')  rerendering on every App`s input change time??even when taskList is the same??
        return (
            // onClick={this.log}
            <div  className='TaskList'>
            {check}
            </div>
            
        );
    }
}

export default TaskList;