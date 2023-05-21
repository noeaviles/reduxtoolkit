import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import {agregarTarea} from '../features/taskSlice'
import {v4 as uuid} from 'uuid'


function TaskForm() {
  const dispatch = useDispatch();

  const [tarea,setTarea] = useState({
    title:'',
    description:''
  })

  const handleChange =  (e) =>{
    setTarea({
      ...tarea,
      [e.target.name] : e.target.value,
    })
  }

const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(agregarTarea({
    ...tarea,
    id:uuid()
  }))
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name='title' placeholder='Titulo' onChange={handleChange}/>
        <textarea name="description" cols="30" rows="10" placeholder='Descripcion' onChange={handleChange}/>
        <input type="submit" />
      </form>
    </div>
  )
}

export default TaskForm