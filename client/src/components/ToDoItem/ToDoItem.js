import React from 'react';
import axios from 'axios';
import './ToDoItem.scss';

class ToDoItem extends React.Component {
	state = {
		status: 'todo',
		exist: true
	}

	checkComplete = () => {
		axios
			.put(`http://localhost:8080/todo/${this.props.todoId}`, {
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
			this.state.exist === true 
				? <li className='todoitem'>
					{this.props.status === 'todo' 
						? <div className={this.state.status === 'todo' ? 'todoitem__status' : 'todoitem__status todoitem__status--complete'} onClick={this.checkComplete}></div>
						: ''
					}				
					<h3 className='todoitem__title'>{this.props.todo}</h3>
				</li>
				: ''						
		);	
	}
}

export default ToDoItem;