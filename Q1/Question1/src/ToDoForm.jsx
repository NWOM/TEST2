import React from 'react';

function ToDoForm() {
  const [userInput, setUserInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Enter a task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default ToDoForm;