import React, { useState } from 'react';

const ToDo = ({ item, onUpdate, onDelete }) => {
    const [isEdit, setIsEdit] = useState(false)


    function FormEdit(){
        
        const[newValue, setNewValue] = useState(item.title)
        

        const handleSubmit =(e)=>{
            e.preventDefault()
            onUpdate(item.id, newValue);
            setIsEdit(false)
        }

        const handleChange = (e) => {
            const value = e.target.value
            setNewValue(value)
        }



        return(
            <form onSubmit={handleSubmit}>
                <input type="text" value={newValue} onChange={handleChange}/>
                <button>Update</button>
            </form>
        )
    }

    function ToDoElement(){
        return(
        <div>
            <span>{item.title}</span> <button onClick={()=> setIsEdit(true)}>✏️</button>
            <button onClick={(e)=> onDelete(item.id)}>❌</button>
        </div>
    )}


    return <div> {isEdit ? <FormEdit/> : <ToDoElement/>} </div>
    
};

export default ToDo;