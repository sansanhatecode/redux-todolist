import { Types } from "./types"
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    todoList: []
}

export const todoJobsReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.addJob: {
            const newJob = {
                name: action.payload,
                done: false,
                id: uuidv4()
            }
            return {
                todoList: state.todoList = [newJob, ...state.todoList]
            }
        }
        case Types.deleteJob: {
            return {
                todoList: state.todoList = state.todoList.filter(job => job.id !== action.payload)
            }
        }
        case Types.markAsDone: {
            const newTodoList = [...state.todoList]
            const foundJob = newTodoList.find(job => job.id === action.payload)
            foundJob.done = true
            return{
                todoList: state.todoList = newTodoList
            }
        }
        case Types.editJob: {
            const newTodoList = [...state.todoList]
            const editJob = newTodoList.find(job => job.id === action.payload.id)
            editJob.name = action.payload.name
            return{
                todoList: state.todoList = newTodoList
            }
        }
        case Types.markAllAsDone: {
            const newTodoList = [...state.todoList]
            if(action.payload){
                for (let i = 0; i < newTodoList.length; i++) {
                    newTodoList[i].done = true;
                }
            }
            else {
                for (let i = 0; i < newTodoList.length; i++) {
                    newTodoList[i].done = false;
                }
            }
            return {
                todoList: state.todoList = newTodoList
            }
        }
        default:
            return state
    }
}