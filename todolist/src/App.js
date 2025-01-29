import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  function addTodo(task) {
    setTodos([...todos, { task, completed: false }]);
  }

  function updateTodo(task) {
    setTodos(
      todos.map((todo, index) =>
        index === editingIndex ? { ...todo, task } : todo
      )
    );
    setEditingIndex(null);
  }

  function editTodo(index) {
    setEditingIndex(index);
  }

  function deleteTodo(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  function toggleComplete(index) {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function sortTasks() {
    setTodos([...todos].sort((a, b) => a.task.localeCompare(b.task)));
  }

  return (
    <>
      {editingIndex === null ? (
        <TodoInput onSave={addTodo} />
      ) : (
        <TodoInput
          task={todos[editingIndex].task}
          isEditing={true}
          onSave={updateTodo}
          onCancel={() => setEditingIndex(null)}
        />
      )}
      <button onClick={sortTasks} className="sort-button">Sort Alphabetically</button>
      <TodoList todos={todos} onEdit={editTodo} onDelete={deleteTodo} onToggleComplete={toggleComplete} />
    </>
  );
}

export default App;
