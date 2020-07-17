import React from 'react';
import axios from 'axios';
import './ToDoItem.scss';

const API_URL = process.env.NODE_ENV === "production"
  ? 'https://jy-todo-list.herokuapp.com'
  : 'http://localhost:8080';

class ToDoItem extends React.Component {
	state = {
		status: 'todo',
	}

	checkComplete = () => {
		axios
			.put(`${API_URL}/todo/${this.props.todoId}`, {
				status: 'complete'
			})
			.then(() => {
				this.setState({
					status: 'complete'
				})
			})
			.catch(err => {
				window.alert(err);
			})
	}

	render() {
		return (
			<li className='todoitem'>
				{this.props.status === 'todo' 
					? <div className={this.state.status === 'todo' ? 'todoitem__status' : 'todoitem__status todoitem__status--complete'} onClick={this.checkComplete}></div>
					: ''
				}				
				<h3 className='todoitem__title'>{this.props.todo}</h3>
			</li>					
		);	
	}
}

export default ToDoItem;