import React from 'react';
import axios from 'axios';
import ToDoItem from '../ToDoItem/ToDoItem';
import ToDoForm from '../ToDoForm/ToDoForm';
import './ToDoCard.scss';


class ToDoCard extends React.Component {
	state = {
		loggedIn: false,
		tab: 'todo',
		user: {
			fName: '',
			lName: '',
			id: ''
		},
		todo: [],
		addItem: false,
		whatTodo: ''
	}

	componentDidMount() {
		// CHECK IF USER IS LOGGED IN
		axios
			.get(`http://localhost:8080/auth/check-auth`, { withCredentials: true })
			.then(res => {				
				axios
					.get(`http://localhost:8080/user/${res.data.id}`)
					.then(response => {
						let user = response.data[0];
						this.setState({
							loggedIn: true,
							user: {
								fName: user.fName,
								lName: user.lName,
								id: user.id								
							},
							todo: user.todo
						});
					})
			})
			.catch(err => {
				this.setState({
					loggedIn: false,
					user: {}
				})
			})
	}

	//toggle tab to todo
	todoTabClickHandler = () => {
		this.setState({
			tab: 'todo'
		})
	}

	//toggle tab to complete
	completeTabClickHandler = () => {
		axios
			.get(`http://localhost:8080/auth/check-auth`, { withCredentials: true })
			.then(res => {				
				axios
					.get(`http://localhost:8080/user/${res.data.id}`)
					.then(response => {
						let user = response.data[0];
						this.setState({
							loggedIn: true,
							tab: 'complete',
							user: {
								fName: user.fName,
								lName: user.lName,
								id: user.id								
							},
							todo: user.todo
						});
					})
			})
			.catch(err => {
				this.setState({
					loggedIn: false,
					user: {}
				})
			})
	}

	//toggle ToDoForm
	toggleAdd = e => {
		e.preventDefault();
		this.state.addItem === false
		? this.setState({
			addItem: true
		})
		: this.setState({
			addItem: false
		})
	}

	//formHandler for new todo
	submitHandler = e => {
		e.preventDefault();
		this.setState({
			whatTodo : e.target.todo.value
		}, () => {
			axios
				.post('http://localhost:8080/todo/', {
					todo: this.state.whatTodo,
					userId: this.state.user.id
				})
				.then(res => {
					this.setState({
						todo: this.state.todo.concat(res.data)
					}, () => {
						console.log(this.state);
					})
				})
		})
		e.target.reset();
	}

	//render todo list
	renderTodo = () => {
		let todoList = this.state.todo.filter(todo => {
			if (todo.status === 'todo') {
				return todo;				
			}
			return '';
		})
		return todoList.map(todo => {
			return <ToDoItem todo={todo.todo} todoId={todo.id} status={todo.status} />
		})
	}

	//render complete list
	renderComplete = () => {
		let completeList = this.state.todo.filter(todo => {
			if (todo.status === 'complete') {
				return todo;
			}
			return '';
		})
		return completeList.map(todo => {
			return <ToDoItem todo={todo.todo} todoId={todo.id} status={todo.status} />
		})
	}

	render() {
		return (
			<div className='todocard'>
				<div
					className={this.state.tab === 'todo'
						? 'todocard__tab todocard__tab--active'
						: 'todocard__tab'}
					onClick={this.todoTabClickHandler}>
					<h2>To Do</h2>
				</div>
				<div
					className={this.state.tab === 'complete'
						?	'todocard__tab todocard__tab--complete todocard__tab--active'
						: 'todocard__tab todocard__tab--complete'} 
					onClick={this.completeTabClickHandler}>
					<h2>Complete</h2>
				</div>
				<div className='todocard__box'>
					<div>
						{this.state.loggedIn === false
							?	<a href="http://localhost:8080/auth/google">
								<button>Log In</button>
							</a>						
							:	<>
								<h1 className='todocard__name'>{`${this.state.user.fName} ${this.state.user.lName}`}</h1>
								<ul className='todocard__list'>
									{this.state.tab === 'todo'
										? this.renderTodo()
										: this.renderComplete()
									}
								</ul>
								{this.state.tab === 'todo' 
									?<button 
										className={this.state.addItem === true ? 'active-button' : '' }
										onClick={this.toggleAdd}>
											Add Item
									</button> 
									:''
								}
								{this.state.addItem === true
									?	<ToDoForm toggleAdd={this.toggleAdd} submitHandler={this.submitHandler} />
									:	''
								}
							</>						
						}
					</div>
				</div>
			</div>
		);
	}
}

export default ToDoCard;