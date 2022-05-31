import React from 'react'

export default function TodoItem({todo, dispatch,ACTIONS}) {
  return (
    <div>
        <ul>
            <li >
               <span style={{color:todo.complete?"blue":"black"}}>{todo.todo}</span> 
            <button onClick={()=>dispatch({type:ACTIONS.COMPLETEDTODO, payload:{id:todo.id}})} >Complete</button>
            <button onClick={()=>dispatch({type:ACTIONS.DELETETODO, payload:{id:todo.id}})}>Delete</button> 
            </li>
        </ul>
    </div>
  )
}
