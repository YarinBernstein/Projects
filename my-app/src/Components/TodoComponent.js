import React from 'react';

function TodoComponent({text, onDelete }) {
  const handleDelete = () => {
    onDelete();
  };

  return (
    <div className="todo-item">
      <span className="todo-text">{text}</span>
      <button onClick={handleDelete} className="delete-button">
        Delete
      </button>
    </div>
  );
}

export default TodoComponent;
