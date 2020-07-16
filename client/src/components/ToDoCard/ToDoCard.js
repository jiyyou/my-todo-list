import React from 'react';
import ToDoItem from '../ToDoItem/ToDoItem';

class ToDoCard extends React.Component {
	state = {

	}

	render() {
		return (
			<div className='todocard'>
				<div>
					<h2>To Do</h2>
				</div>
				<div>
					<h2>Complete</h2>
				</div>
				<div>
					<h1>Jiyo You</h1>
					<ul>
			
					</ul>
				</div>
			</div>
		);
	}
}

export default ToDoCard;