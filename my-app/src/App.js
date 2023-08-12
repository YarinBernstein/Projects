import React, { useState } from 'react';
import './App.css';
import TitleComponent from './Components/TitleComponent';
import ButtonComponent from './Components/ButtonComponent';
import FormComponent from './Components/FormComponent';
import TodoComponent from './Components/TodoComponent';

function App() {
  const [titleText, setTitleText] = useState("Yarin's Todo List");
  const [inputText, setInputText] = useState('');
  const [todoList, setTodoList] = useState([]);


  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleButtonClick = () => {
    setInputText(''); // Clear the input after updating the title
    const newTodo = {
      id: Date.now(),
      text: inputText,
    };
    setTodoList([...todoList, newTodo]);
    
  };
  
  const handleDeleteButtonClick = (id) =>{
    const newTodoList = todoList.filter(((todo) => todo.id !== id));
    setTodoList(newTodoList)
  }
  

  return (
    <div className="App">
      <TitleComponent id="tc" title={titleText}></TitleComponent>
      <ul id='task-list'>
      {todoList.map((todo) => (
          <li key={todo.id}>
            <TodoComponent text={todo.text} onDelete={() => handleDeleteButtonClick(todo.id)} />
          </li>
        ))}
      </ul>
      <FormComponent
        inputText={inputText}
        handleInputChange={handleInputChange}
      />
      <ButtonComponent onClick={handleButtonClick}></ButtonComponent>
      
    </div>
  );
}

export default App;
