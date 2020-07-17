import React from 'react';
import ToDoItem from '../ToDoItem/ToDoItem';
import axios from 'axios';
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
		}
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

	render() {
		return (
			<div className='todocard'>
				<div
					className={this.state.tab === 'todo'
						?'todocard__tab todocard__tab--active'
						:'todocard__tab'}
					onClick={this.todoTabClickHandler}>
					<h2>To Do</h2>
				</div>
				<div
					className={this.state.tab === 'complete'
						?'todocard__tab todocard__tab--complete todocard__tab--active'
						:'todocard__tab todocard__tab--complete'} 
					onClick={this.completeTabClickHandler}>
					<h2>Complete</h2>
				</div>
				<div className='todocard__box'>
					<div>
						{this.state.loggedIn === false
							?<a href="http://localhost:8080/auth/google">
								<button>Log In</button>
							</a>						
							:<>
								<h1>Jiyo You</h1>
								<ul>
									{this.state.tab === 'todo'
										? <p>hi</p>
										: <p>hello</p>}
								</ul>
								{this.state.tab === 'todo' 
									?<button>Add Item</button> 
									:'' }
							</>						
						}
					</div>
				</div>
			</div>
		);
	}
}

export default ToDoCard;