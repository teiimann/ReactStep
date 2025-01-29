import React, { useState } from "react";
import './TodoInput.css';

function TodoInput({ task, onSave, isEditing, onCancel }) {
  const [inputValue, setInputValue] = useState(task || '');

  function handleSave() {
    if (inputValue.trim()) {
      onSave(inputValue);
      setInputValue('');
    }
  }

  return (
    <div className="input-container">
      <input
        placeholder="Write your task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        className="task-input"
      />
      <button onClick={handleSave}>
        {isEditing ? 'Save' : 'Add'}
      </button>
      {isEditing && <button onClick={onCancel}>Cancel</button>}
    </div>
  );
}

export default TodoInput;
