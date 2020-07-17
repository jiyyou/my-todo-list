import React from 'react';
import './ToDoForm.scss';

function ToDoForm(props) {
	return (
		<form className='todoform' onSubmit={props.submitHandler}>			
			<input className='todoform__input' type="text" name='todo' placeholder='What todo?' />
			<button className='todoform__button'>Submit</button>
			<button className='todoform__button' onClick={props.toggleAdd}>Cancel</button>
		</form>
	);
}

export default ToDoForm;