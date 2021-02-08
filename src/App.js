import React, { Component } from 'react';
import Tasks from './Components/Overview';

class App extends Component {
  state = {
    tasks: []
  }

  render() {
  return (
    <div>
      <h1>Task List</h1>
      <form>
        <label>
        </label>
        <input>
        </input>
        <button></button>
      </form>
      <Tasks></Tasks>
    </div>
  );
  }
}

export default App;
