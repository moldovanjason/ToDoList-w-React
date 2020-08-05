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
			taskListed: []
		};
	}

	componentDidMount() {
		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/moldovanjasonFirst"
		)
			.then(response => {
				if (response.ok) {
					return response.json();
				}
			})
			.then(data => {
				this.setState({
					taskListed: data
				});
			});
	}

	updateTask = event => {
		this.setState({ task: event.target.value });
	};
	saveTask = event => {
		if (event.keyCode === 13) {
			const newArr = [...this.state.taskListed];
			let newObj = { label: this.state.task, done: false };
			newArr.push(newObj);
			this.setState({
				taskListed: newArr,
				task: ""
			});
			fetch(
				"https://assets.breatheco.de/apis/fake/todos/user/moldovanjasonFirst",
				{
					method: "PUT", // or 'POST'
					body: JSON.stringify(newArr), // data can be `string` or {object}!
					headers: {
						"Content-Type": "application/json"
					}
				}
			)
				.then(res => res.json())
				.then(response =>
					console.log("Success:", JSON.stringify(response))
				)
				.catch(error => console.error("Error:", error));
		}
	};

	deleteFunctionHandler = id => {
		const returnArr = this.state.taskListed.filter(
			(i, index) => index !== id
		);
        this.setState({ taskListed: returnArr });

		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/moldovanjasonFirst",
			{
				method: "PUT", // or 'POST'
				body: JSON.stringify(returnArr), // data can be `string` or {object}!
				headers: {
					"Content-Type": "application/json"
				}
			}
		)
			.then(res => res.json())
			.then(response => console.log("Success:", JSON.stringify(response)))
			.catch(error => console.error("Error:", error));
    };
    
	render() {
		var listContent = this.state.taskListed.map((obj, index) => {
			return (
				<ListTask
					key={index}
					task={obj.label}
					deleteFunction={this.deleteFunctionHandler}
					id={index}
				/>
			);
		});

		return (
			<div className="page container">
				<h1 className="title">To Do List</h1>
				<input
					className="placeholder"
					value={this.state.task}
					onChange={this.updateTask}
					onKeyUp={this.saveTask}
					placeholder="Enter your daily tasks!"
				/>
				<ul>
					{this.state.taskListed.length ? (
						listContent
					) : (
						<li className="notasks">
							There are no daily tasks. Please add a task.
						</li>
					)}
				</ul>
			</div>
		);
	}
}
