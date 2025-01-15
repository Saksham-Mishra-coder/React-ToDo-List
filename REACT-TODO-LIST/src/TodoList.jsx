import { useState } from "react";

export default function TodoList() {
    let [todo , setTodo] = useState([]);
    let [newTask , setNewTask]= useState("");

    let newTodo = () =>{
        setTodo([...todo, newTask]);
        setNewTask("");
    };

    let updateTodo = (event) =>{
        
        setNewTask(event.target.value);
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
                    <li>{todo}</li>
                    ))
                }
            </ul>

        </div>
    )
}
