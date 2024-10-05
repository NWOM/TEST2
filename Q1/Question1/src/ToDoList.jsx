
import React, { useState, useEffect } from 'react';

function ToDoList() {
  const [toDoList, setToDoList] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [completedTasks, setCompletedTasks] = useState([]);
  const [pendingTasks, setPendingTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('toDoList');
    if (storedTasks) {
      setToDoList(JSON.parse(storedTasks));
    }
  }, []);

  const addTask = (task) => {
    const newTask = { id: toDoList.length + 1, task, complete: false };
    setToDoList([...toDoList, newTask]);
    localStorage.setItem('toDoList', JSON.stringify([...toDoList, newTask]));
  };

  const editTask = (id, newTask) => {
    const updatedTasks = toDoList.map((task) => {
      if (task.id === id) {
        return { ...task, task: newTask };
      }
      return task;
    });
    setToDoList(updatedTasks);
    localStorage.setItem('toDoList', JSON.stringify(updatedTasks));
  };

  const deleteTask = (id) => {
    const updatedTasks = toDoList.filter((task) => task.id !== id);
    setToDoList(updatedTasks);
    localStorage.setItem('toDoList', JSON.stringify(updatedTasks));
  };

  const markTaskAsCompleted = (id) => {
    const updatedTasks = toDoList.map((task) => {
      if (task.id === id) {
        return { ...task, complete: true };
      }
      return task;
    });
    setToDoList(updatedTasks);
    localStorage.setItem('toDoList', JSON.stringify(updatedTasks));
  };

  const filterTasks = (filterType) => {
    if (filterType === 'completed') {
      setCompletedTasks(toDoList.filter((task) => task.complete));
    } else if (filterType === 'pending') {
      setPendingTasks(toDoList.filter((task) => !task.complete));
    }
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={() => addTask(userInput)}>Add Task</button>
      <ul>
        {toDoList.map((task) => (
          <li key={task.id}>
            <span
              style={{
                textDecoration: task.complete ? 'line-through' : 'none',
              }}
            >
              {task.task}
            </span>
            <button onClick={() => editTask(task.id, 'New task')}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            <button onClick={() => markTaskAsCompleted(task.id)}>Complete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => filterTasks('completed')}>Show Completed Tasks</button>
      <button onClick={() => filterTasks('pending')}>Show Pending Tasks</button>
      <ul>
        {completedTasks.map((task) => (
          <li key={task.id}>{task.task}</li>
        ))}
      </ul>
      <ul>
        {pendingTasks.map((task) => (
          <li key={task.id}>{task.task}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;