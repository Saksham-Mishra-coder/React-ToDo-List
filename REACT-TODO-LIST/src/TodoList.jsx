import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function TodoList() {
    let [todo , setTodo] = useState([{task: "sample-task", id: uuidv4(),isDone: false}]);//implement uuid here:)

    let [newTask , setNewTask]= useState("");
    let newTodo = () =>{
        setTodo ((prevTodos) =>{
                return [...prevTodos, {task: newTask, id: uuidv4(),isDone: false}]
        });
        setNewTask("");
    };

    let updateTodo = (event) =>{
       
        setNewTask(event.target.value);
    };
    let deleteTodo =(id)=> {
     setTodo( (prevTodos)=>  todo.filter((prevTodos)=> prevTodos.id !=id));
        console.log(id);
    };
    let doneOne = (id)=>{
        setTodo((prevTodos)=>
            prevTodos.map((todo) => {
                if(todo.id==id){
                    return{
                        ...todo,
                        isDone: true,
                    }
                }else {
                    return todo;
            }
            })
        );

            
    
    
    };
    let doneAll = ()=>{
        setTodo((prevTodos)=>
            prevTodos.map(function (todo) {
                return {
                    ...todo,
                    isDone: true,
                };
            }

            )
        );
    };



    return (
        <div>
            <input type="text" placeholder="Add a Task" value={newTask} onChange={updateTodo}/>
            <br></br>
            <br />
            <button onClick={newTodo}>Add Task</button>
            <br />
            <br />
            <hr />
            <h4>Todo List</h4>
            <ul>
                {
                    todo.map((todo) => (
                    <li key = {todo.id}>
                        <span style={todo.isDone ? {textDecorationLine: "line-through"}:{}}>{todo.task}</span>
                        &nbsp;&nbsp;
                        <button onClick={()=>{deleteTodo(todo.id)}}>delete</button>
                        <button onClick={()=>{doneOne(todo.id)}}>Done</button>
                        </li>
                  
                    ))
                }   <br></br><br></br>
                          <button onClick={doneAll}   >Done All</button>
            </ul>

        </div>
    )
}
