import React from 'react';

function ToDoItem(props) {
	return (
		<li className='todoitem'>
			<div className="todoitem__status"></div>
			<p className='todoitem__title'>{props.title}</p>
			<p className='todoitem__when'>{props.when}</p>
		</li>
	);
}

export default ToDoItem;