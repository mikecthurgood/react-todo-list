import React from 'react';
import './App.css';
import Tasklist from './Tasklist';
import Filter from './Filter';
import AddTask from './AddTask';

import { CATEGORIES } from './data'

class App extends React.Component {

  state = {
    categorySelection: "All",
    tasks: [
      {
        text: 'Buy rice',
        category: 'Food'
      },
      {
        text: 'Save a tenner',
        category: 'Money'
      },
      {
        text: 'Build a todo app',
        category: 'Code'
      },
      {
        text: 'Build todo API',
        category: 'Code'
      },
      {
        text: 'Get an ISA',
        category: 'Money'
      },
      {
        text: 'Cook rice',
        category: 'Food'
      },
      {
        text: 'Tidy house',
        category: 'Misc'
      }
    ]
  }

  onSelectCategory = (e) => {
    this.setState({
      categorySelection: e.target.innerText
    })
  }

  addNewTask = (e) => {
    e.preventDefault()
    e.persist()
    let text = e.target[0].value;
    let category = e.target[1].value;
    this.setState({
      ...this.state,
      tasks: [
        ...this.state.tasks,
        {
          text: text,
          category: category
        }
      ]
    })
    e.target.reset()
  }

  deleteTask = (task) => {
    let newTaskList = this.state.tasks.filter(t => t !== task)
    this.setState({
      ...this.state,
      tasks: newTaskList
    })
  }

  render() {
    return (
      <div className="App">
        <h2>My tasks</h2>
        <Filter data={CATEGORIES} categorySelection={this.state.categorySelection} onSelectCategory={this.onSelectCategory} />
        <AddTask categories={CATEGORIES.filter(cat => cat !== 'All')} addNewTask={this.addNewTask} />

        <Tasklist data={this.state.categorySelection === 'All' ? this.state.tasks : this.state.tasks.filter(task => task.category === this.state.categorySelection)
        } deleteTask={this.deleteTask} />
      </div>
    );
  }
}


export default App;
