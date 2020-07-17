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
			id: '',
			todo: []
		},
		addItem: false
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
								id: user.id,
								todo: user.todo
							}
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

	todoTabClickHandler = () => {
		this.setState({
			tab: 'todo'
		})
	}

	completeTabClickHandler = () => {
		this.setState({
			tab: 'complete'
		})
	}

	toggleAdd = e => {
		e.preventDefault();
		this.state.addItem === false
		?this.setState({
			addItem: true
		})
		:this.setState({
			addItem: false
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
								<h1>Jiyo You</h1>
								<ul>
									{this.state.tab === 'todo'
										? <p>hi</p>
										: <p>hello</p>
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
									?	<ToDoForm />
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