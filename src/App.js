import { useReducer, useState } from "react";
import TodoItem from "./TodoItem";

const ACTIONS={
  ALLTODO:"alltodo",
  COMPLETEDTODO:"completedtodo",
  DELETETODO:"deletetodo"
}

const reducer = (todos,action)=>{
  switch(action.type){
    case ACTIONS.ALLTODO:
      return [...todos, {todo:action.payload.todo, id:Date.now(), complete:false }];
      case ACTIONS.COMPLETEDTODO:
        return todos.map((todo)=>{
               if(todo.id === action.payload.id){
                 return {...todo, complete:!todo.complete}
               }
               return todo
         });
        case ACTIONS.DELETETODO:
          return todos.filter((todo)=>todo.id !== action.payload.id)
          default:
            return todos;
          }
        }
        
function App() {
  const [todo, setTodo] = useState("");
  const [todos, dispatch] = useReducer(reducer, [])

  const handleSubmit =(e)=>{
    e.preventDefault();
    dispatch({type:ACTIONS.ALLTODO, payload:{todo:todo}})
    console.log(todo)
    setTodo('')
  }

  return (
    <div classtodo="App">
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder="todo..." value={todo} onChange={e=>setTodo(e.target.value)}/>
      </form>
     
      {todos.map((todo)=>{
        return <TodoItem key={todo.id} todo={todo} dispatch={dispatch} ACTIONS={ACTIONS}/>
      })}
    </div>
  );
}

export default App;
