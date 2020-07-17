import React from 'react';

function ToDoItem(props) {
	return (
		<li className='todoitem'>
			<div className="todoitem__status"></div>
			<h3 className='todoitem__title'>{props.todo}</h3>
		</li>
	);
}

export default ToDoItem;