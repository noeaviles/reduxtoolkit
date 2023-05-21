import {createSlice} from '@reduxjs/toolkit';

export const taskSlice = createSlice ({
    name: 'task',
    initialState:[],
    reducers:{
        tareasSucces(state,action) {
           // state.push(action.payload)
            console.log(action.payload);
        },
        agregarTarea:(state,action) => {
         state.push(action.payload)
        },
        eliminarTarea:(state,action) => {
            const tareaFound = state.find( tarea => tarea.id === action.payload )
            if(tareaFound) {
                state.splice(state.indexOf(tareaFound),1)
            }
           }
    }
})

export const {tareasSucces,agregarTarea,eliminarTarea} = taskSlice.actions
export default taskSlice.reducer