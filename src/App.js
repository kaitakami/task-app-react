import { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";
class App extends Component {
  constructor() {
    super();
    this.state = {
      task: {
        name: "",
        id: uniqid(),
      },
      tasks: [],
      edit: false,
    };
  }

  handleRemove = (deletedTask) => {
    // eslint-disable-next-line no-restricted-globals
    const remove = confirm("Do you want to remove this task?");
    if (remove) {
      const updatedArr = this.state.tasks.filter(
        (task) => task.id != deletedTask.id
      );
      this.setState({
        tasks: [...updatedArr],
      });
    }
  };

  handleEdit = (editedTask) => {
    this.setState({
      task: {
        name: editedTask.name,
        id: editedTask.id,
      },
      edit: true,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.edit) {
      const updatedArr = this.state.tasks.map((task) =>
        task.id === this.state.task.id ? this.state.task : task
      );
      this.setState({
        tasks: [...updatedArr],
      });
    } else {
      this.setState({
        tasks: [...this.state.tasks, this.state.task],
      });
    }
    this.setState({
      task: {
        name: "",
        id: uniqid(),
      },
      edit: false,
    });
  };

  render() {
    const { edit } = this.state;
    return (
      <div className="App">
        <div className="container">
          <form onSubmit={this.handleSubmit} className="form">
            <label htmlFor="task" className="label">
              {edit ? "Edit your task" : "Write your task"}
            </label>
            <div className="inputs">
              <input
                id="task"
                className="input"
                type="text"
                minLength="2"
                value={this.state.task.name}
                onChange={(e) =>
                  this.setState({
                    task: {
                      name: `${e.target.value}`,
                      id: this.state.task.id,
                    },
                  })
                }
                placeholder="ex) Clean the house"
                required
              />
              <input type="submit" value={edit ? "Edit" : "Add"} className="button-27" />
            </div>
          </form>
          <Overview
            tasks={this.state.tasks}
            handleRemove={this.handleRemove}
            handleEdit={this.handleEdit}
          />
        </div>
      </div>
    );
  }
}

export default App;
