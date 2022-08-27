import { Component } from "react";
import Task from "./Task";

class Overview extends Component {
  render() {
    return (
      <div className="container">
        {this.props.tasks.length ? (
          <>
            <h2>Your tasks</h2>
            <div className="tasks">
              {this.props.tasks.map((task) => {
                return (
                  <Task
                    key={task.id}
                    task={task}
                    tasks={this.props.tasks}
                    handleRemove={this.props.handleRemove}
                    handleEdit={this.props.handleEdit}
                  >
                    {task.name}
                  </Task>
                );
              })}
            </div>
          </>
        ) : (
          <h2>Start adding a task</h2>
        )}
      </div>
    );
  }
}

export default Overview;
