import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import {tareasSucces} from './features/taskSlice';
import React,{useEffect} from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    lodingData();
  }, [])
  
  const lodingData = async () => {
    await axios.get('http://localhost:5000/tareas')
    .then(function (response){
      const data = response.data
      dispatch(tareasSucces(data))
    })
  }

  return (
    <div className="App">
      <TaskForm/>
      <TaskList/>
    </div>
  );
}

export default App;
