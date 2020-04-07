import {
  GET_TASKS,
  SET_LOADING,
  TASKS_ERROR,
  ADD_TASK,
  DELETE_TASK,
  SEARCH_TASKS,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_TASK
} from '../actions/types'

const initialState = {
  tasks: null,
  current: null,
  loading: false,
  error: null
}
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
        loading: false
      }
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        loading: false
      }
    case SEARCH_TASKS:
      return {
        ...state,
        tasks: action.payload
      }
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      }

    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      }
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
        loading: false
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }

    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? action.payload : task
        )
      }
    case TASKS_ERROR:
      console.error(action.payload)
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}
