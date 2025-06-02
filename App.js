import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await axios.get('http://localhost:5000/tasks');
    setTasks(res.data);
  };

  const addTask = async () => {
    if (newTask) {
      await axios.post('http://localhost:5000/tasks', { title: newTask });
      setNewTask('');
      fetchTasks();
    }
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/tasks/${id}`);
    fetchTasks();
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <div className="flex mb-4">
        <input
          type="text"
          className="border p-2 flex-grow"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="bg-blue-500 text-white p-2 ml-2" onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className="flex justify-between items-center mb-2">
            <span>{task.title}</span>
            <button className="text-red-500" onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
