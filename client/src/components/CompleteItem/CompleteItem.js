import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './CompleteItem.scss';

const API_URL = process.env.NODE_ENV === "production"
  ? 'https://jy-todo-list.herokuapp.com'
  : 'http://localhost:8080';

class CompleteItem extends React.Component {
	state = {
		exist: true
	}

	deleteTodo = () => {
		axios
			.delete(`${API_URL}/todo/${this.props.todoId}`);
		this.setState({
			exist: false
		})
	}

	render() {
		return (
			this.state.exist === true 
				? <li className='completeitem'>		
					<h3 className='completeitem__title'>{this.props.todo}</h3>
					<FontAwesomeIcon className='completeitem__delete' icon={faTrashAlt} onClick={this.deleteTodo} />
				</li>
				: ''			
		)
	}
}

export default CompleteItem;