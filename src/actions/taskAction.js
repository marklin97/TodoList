import {
  GET_TASKS,
  SET_LOADING,
  TASKS_ERROR,
  UPDATE_TASK,
  ADD_TASK,
  SEARCH_TASKS,
  DELETE_TASK,
  SET_CURRENT,
  CLEAR_CURRENT
} from './types'

// Get tasks from server
export const getTasks = () => async dispatch => {
  try {
    setLoading()
    const res = await fetch('/todos')
    const data = await res.json()
    dispatch({
      type: GET_TASKS,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: TASKS_ERROR,
      payload: err.response.data
    })
  }
}
//Search tasks
export const searchTasks = text => async dispatch => {
  try {
    setLoading()
    const res = await fetch(`/todos?q=${text}`)
    const data = await res.json()
    dispatch({
      type: SEARCH_TASKS,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: TASKS_ERROR,
      payload: err.response.data
    })
  }
}

// update task on server
export const updateTask = task => async dispatch => {
  try {
    setLoading()
    const res = await fetch(`/todos/${task.id}`, {
      method: 'PUT',
      body: JSON.stringify(task),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json()
    dispatch({
      type: UPDATE_TASK,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: TASKS_ERROR,
      payload: err.response.data
    })
  }
}
// Delete task from server
export const deleteTask = id => async dispatch => {
  try {
    setLoading()
    await fetch(`/todos/${id}`, {
      method: 'DELETE'
    })

    dispatch({
      type: DELETE_TASK,
      payload: id
    })
  } catch (err) {
    dispatch({
      type: TASKS_ERROR,
      payload: err.response.data
    })
  }
}
// Set current task
export const setCurrent = task => {
  return {
    type: SET_CURRENT,
    payload: task
  }
}

// Clear current task
export const clearCurrent = task => {
  return {
    type: CLEAR_CURRENT
  }
}

// Add new task

export const addTask = task => async dispatch => {
  try {
    setLoading()
    const res = await fetch('/todos', {
      method: 'POST',
      body: JSON.stringify(task),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json()
    dispatch({
      type: ADD_TASK,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: TASKS_ERROR,
      payload: err.response.data
    })
  }
}
export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}
