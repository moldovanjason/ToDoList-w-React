import React from "react";
import { ListTask } from "./listtask";

//create your first component
export class Home extends React.Component {
	// create contructor to store variable(s)

	// create state with empty array to store tasks

	// create state variable for current task

	//input field

	//creat ul li list

	//creat map function to inclue element on the list
	constructor() {
		super();
		this.state = {
			task: "",
			taskList: []
		};
	}

	updateTask = event => {
		this.setState({ task: event.target.value });
	};
	saveTask = event => {
		if (event.keyCode === 13) {
			const newArr = [...this.state.taskListed];
			newArr.push(this.state.task);
			this.setState({
				taskListed: newArr,
				task: ""
			});
		}
	};
	deleteFunctionHandler = () => {
		const returnArr = this.state.taskList.filter(
			(i, index) => index !== this.id
		);
		this.setState({ taskListed: returnArr });
	};
	render() {
		return (
			<div className="container">
				<h1>ToDos</h1>
				<input
					value={this.state.task}
					onChange={this.updateTask}
					onKeyUp={this.saveTask}
					placeholder="What needs to be done?"
				/>
				<ul>
					{this.state.taskListed.map((liContent, index) => {
						return (
							<ListTask
								key={index}
								task={liContent}
								deleteFunction={this.deleteFunctionHandler}
								id={index}
							/>
						);
					})}
				</ul>
			</div>
		);
	}
}
