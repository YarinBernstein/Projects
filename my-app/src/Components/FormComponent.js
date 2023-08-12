import React from 'react';

function FormComponent({ inputText, handleInputChange}) {
  return (
    <div className='form-container'>
        <form>
            <label className='form-label'>
                Add New Task:
                <input
                type="text"
                value={inputText}
                onChange={handleInputChange}
                className='form-input'
                />
            </label>
    </form>
    </div>
  );
}

export default FormComponent;
