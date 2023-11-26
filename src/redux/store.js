import {createStore} from 'redux'
import { todoJobsReducer } from './reducer'

export const store = createStore(todoJobsReducer)