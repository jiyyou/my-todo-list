import React from 'react';
import ToDoCard from '../../components/ToDoCard/ToDoCard';

class Main extends React.Component {
	state = {

	}

	render() {
		return (
			<section className='main'>
				<ToDoCard />
			</section>
		);
	}
}

export default Main;