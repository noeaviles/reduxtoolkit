import React from 'react'
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import {eliminarTarea} from '../features/taskSlice'

const TaskList = () => {
  
  const taskState = useSelector ( state => state.tasks )
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(eliminarTarea(id))
  }

  return (
    <div>
      {
        taskState.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <button onClick={()=> handleDelete(item.id)}>Eliminar</button>
          </div>
        ))
      }
    </div>
  )
}

export default TaskList