import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState(["Eat Breakfast"]);
  const [newTask, setNewTask] = useState("");

  function handelChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setNewTask((e.target as HTMLInputElement).value.toString());
  }

  function addTask(): void {
    setTasks([...tasks, newTask]);
  }

  function deleteTask(i: number): void {
    setTasks(tasks.filter((_, index) => index != i));
  }

  function moveTaskUp(index: number): void {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index: number): void {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div>
      <h1>To-Do-list</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task...."
          value={newTask}
          onChange={(e) => handelChange(e)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="delete-button" onClick={() => moveTaskUp(index)}>
              👆
            </button>

            <button
              className="delete-button"
              onClick={() => moveTaskDown(index)}
            >
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TodoList;
