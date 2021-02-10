import React, { Component } from 'react';
import Overview from './Components/Overview';

class App extends Component {
  state = {
    task:"",
    tasks: []
  }

  handleChange = (e) => {
    this.setState({
      task: e.target.value,
    });
  };
  
  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: "",
    });

  };
  render() {
    const { task, tasks } = this.state;

  return (
    <div>
      <h1>Task List</h1>
      <form onSubmit={this.onSubmitTask}>
        <label htmlFor="taskInput">Enter Task</label>
        <input 
        onChange={this.handleChange}
        value={this.state.task} 
        type="text" 
        id="taskInput">
        </input>
        <button type="submit">Add Task</button>
      </form>
      <Overview tasks={tasks} />
    </div>
  );
  }
}

export default App;
