import React from 'react';

function ButtonComponent({ onClick }) {
    const handleButtonClick = () => {
      onClick(); // Call the onClick function without passing any arguments
    };

  return (
    <div>
      <button className="custom-button" onClick={handleButtonClick}>Add New Task</button>
    </div>
  );
}

export default ButtonComponent;
