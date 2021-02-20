import React, { Component } from 'react';
import './Task.css'
class Task extends Component {
    constructor(props){
        super(props);
        this.state = { 
            checked: false
        }
    }
    clickHandler = () => {
        this.setState(prevState=>({checked: !prevState.checked}))
    }
    render() {
        return (
            <div className='Task'>
            <input 
                onChange={this.clickHandler}
                type="checkbox" 
                checked={this.state.checked}
                className='todo'
                />
            <div className={!this.state.checked?'todo':'todo done'}>
                {this.props.content}
            </div>
            
            </div>
            
        );
    }
}

export default Task;