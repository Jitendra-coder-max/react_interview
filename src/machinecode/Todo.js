import React, { useState } from 'react'


const Todo = () => {

    const [todos,setTodos] = useState('');
const [addData, setAddData] = useState([]);

const [editId, setEditId] = useState('')


const addTask = () => {
    // (addData.map)
if(editId){
    setAddData(pre =>pre.map((x) => {  
        if(x === editId){
            return todos
        }
        return x
    }))
    
}
else{
    setAddData([...addData,todos])

}

   
    setTodos('')
}


const deleteTodo = (i) => {
            const deleteData =      addData.filter((data,index) => index !== i)
            setAddData([...deleteData])
}


const updateTodo = (data) => {
setTodos(data)
setEditId(data)
}
  return (
    <div>Todo

        <input  type="text" value={todos}  onChange={(e) => setTodos(e.target.value)}/>
      
    {!editId ? <button onClick={addTask}>Add</button> :<button onClick={addTask}>Edit</button>}
        {/* <button onClick={addTask}>Add</button> */}
        <ul>
            {
                addData.map((data,index) => {
                    return(
                        <li key = {index}>{data}
                        <button onClick={ () =>deleteTodo(index)}>delete</button>
                        <button onClick={ () =>updateTodo(data)}>Update</button>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Todo