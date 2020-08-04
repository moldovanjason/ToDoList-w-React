import React from "react";
import { PropTypes } from "prop-types";

export class ListTask extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			iconVisability: false
		};
	}
	render() {
		const classToApply = this.state.iconVisability ? "visible" : "hidden";
		return (
			<li
				onMouseEnter={() => this.setState({ iconVisability: true })}
				onMouseLeave={() => this.setState({ iconVisability: false })}>
				{this.props.task}
				<span>
					<i
						className={"fa fa-trash " + classToApply}
						onClick={() => this.props.deleteFunction(this.props.id)}
					/>
				</span>
			</li>
		);
	}
}
ListTask.propTypes = {
	id: PropTypes.number,
	task: PropTypes.string,
	deleteFunction: PropTypes.func
};
