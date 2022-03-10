import React, { useState } from 'react'
import './App.css';
function App() {
  const [value, setValue] = useState('')
  const [todo, setTodo] = useState(
    ['Выучить React', 'Делать уроки']
  )
  const title = 'ToDo List'
  const changeValue = (e) => { setValue(e.target.value) }
  const addTodo = () => {
    setTodo(() => {
      if (value.length === 0) {
        alert('Значение пуста')
      } else {
        return [...todo, value]
      }
    })
    setValue('')
  }
  return (
    <div className="App">
      <strong>{title}</strong>
      <div>
        <input
          type="text"
          value={value}
          onChange={changeValue}
          placeholder='Введите список дел'
        />
        <button onClick={addTodo}>+</button>
      </div>
      <ul>
        {todo.map((elem, num) => {
          return (
            <li className='list'>
              <span>{num + 1}</span>
              <span className='elem'>{elem}</span>
            </li>
          )
        })}
      </ul>
    </div>
  );
}
export default App;
