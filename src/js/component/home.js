import React from "react";


//create your first component
export class Home extends React.Component {

// create contructor to store variable(s)


// create state with empty array to store tasks


// create state variable for current task

//input field

//creat ul li list

//creat map function to inclue element on the list
    contructor(){
        super()
        this.state = {
            task: '',
            taskList: []
        }
    }

    updateTask = (event) => {
        task.setState({ task: event.target.value})
    }

    saveTask = () => {

    }


    render(){
        return (
            <div className="container">
                <h1>ToDos</h1>
                <input value={this.state.task} onChange={updateTask} onkeyup={saveTask} placeholder="What needs to be done?"/>
                <ul>
                    <ListTask
                    id= "hello world"
                    />
                </ul>
            </div>
        );
    }
}
