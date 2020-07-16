import React from 'react';

function ToDoItem(props) {
	return (
		<li className='todoitem'>
			<div className="todoitem__status"></div>
			<h3 className='todoitem__title'>{props.title}</h3>
			<p className='todoitem__when'>{props.when}</p>
		</li>
	);
}

export default ToDoItem;