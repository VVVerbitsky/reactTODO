import React, { Component } from 'react';
import './Filter.css'
class Filter extends Component {
    constructor(props){
        super(props);
        this.state = {  }
    }
    

    render() {
        return (
            <div className={this.props.className}>
                <select>
                    <option>Слон</option>
                    <option>Бегемот</option>
                    <option>Жираф</option>
                </select>
            </div>
        );
    }
}

export default Filter;