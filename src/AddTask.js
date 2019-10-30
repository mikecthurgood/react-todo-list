import React from 'react'

class AddTask extends React.Component {

    render() {
        return (
            <form className="new-task-form" onSubmit={this.props.addNewTask}>
                <input type="text" placeholder="New Task Details"></input>
                <select>
                    {this.props.categories.map(cat =>
                        <option value={cat}>{cat}</option>
                    )}
                </select>
                <input type="submit" value="add task" />
            </form>
        )
    }


}

export default AddTask