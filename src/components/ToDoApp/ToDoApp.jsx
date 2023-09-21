import { useState } from "react";
import ToDo from "../ToDo/ToDo";
import styles from './todoApp.module.css'

const ToDoApp = () => {
  const [title, setTitle] = useState("");
  const [toDos, setToDos] = useState([])
  


    const handleChange = (e) => {
        setTitle(e.target.value)
    }

  const handleSubmit = (e) =>{
    e.preventDefault();
    const newToDo = {
        id: crypto.randomUUID(),
        title: title,
        completed: false
    };
    setToDos([...toDos, newToDo])
    setTitle('')
    }

    const handleUpdate = (id, value) => {
        const temp = [...toDos]
        const item = temp.find(el => el.id === id)
        item.title = value
        setToDos(temp)
    }

    const handleDelete = (id) => {
        const temp = toDos.filter(item=>item.id !== id)
        setToDos(temp)
    }




  return (
    <div className={styles.general}>
        <h1>To Do App</h1>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={handleChange} />
        <input
          type="submit"
          value="Create todo"
        />
      </form>

      <div>
        {toDos.map(item=>(
            <ToDo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete}/>
        ))}
      </div>

    </div>
  );
};

export default ToDoApp;
