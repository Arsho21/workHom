import React, { useState } from 'react'

function TodoForm({onAdd}) {

    const [text, setText] = useState('')
  return (
    <form className='formInput' onSubmit={(e) => {
        e.preventDefault();
        onAdd(text);
        setText('')
    }}>
    <h1>Oh my, it's Monday 💪😀</h1>
        <input className='inputtext' type='text' value={text} onChange={(e) => {
            setText(e.target.value);
        }}/>
        <button className='Add'>+</button>
    </form>
  )
}

export default TodoForm