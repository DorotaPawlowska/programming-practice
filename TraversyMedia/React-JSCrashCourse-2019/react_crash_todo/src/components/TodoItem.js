import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class TodoItem extends Component {

    getStyle = () => {
        return  {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #cccccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {

        const{ id, title } = this.props.todo;

        return (
            // <div style={itemStyle}></div>
            <div style={ this.getStyle() }>
                <p>
                    <input type="checkbox" onChange={ this.props.markComplete.bind(this, id) } /> 
                    { title }
                    <button style={btnStyle} onClick={ this.props.delTodo.bind(this, id) }>x</button>
                </p>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

// const itemStyle = {
//     backgroundColor: '#f4f4f4'
// }

const btnStyle = {
    background: '#555555',
    color: '#ffffff',
    border: 'none',
    padding: '5px 7px',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
