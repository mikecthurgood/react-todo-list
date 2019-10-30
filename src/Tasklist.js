import React from 'react'
import Task from './Task'
import AddTask from './AddTask'


class Tasklist extends React.Component {

    render() {
        return (
            <div className="tasks">

                {this.props.data.map(task => <Task task={task} deleteTask={this.props.deleteTask} />)}
            </div>
        )
    }


}

export default Tasklist