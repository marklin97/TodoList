import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import TaskItem from './TaskItem'
import Preloader from '../layout/Preloader'
import PropTypes from 'prop-types'
import { getTasks } from '../../actions/taskAction'

const Tasks = ({ task: { tasks, loading }, getTasks }) => {
  useEffect(() => {
    getTasks()
    //eslint-disable-next-line
  }, [])

  if (loading || tasks === null) {
    return <Preloader />
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>Todo List</h4>
      </li>
      {!loading && tasks.length == 0 ? (
        <p className='center'>No task to to show...</p>
      ) : (
        tasks.map(task => <TaskItem task={task} key={task.id} />)
      )}
    </ul>
  )
}
Tasks.protoTypes = {
  task: PropTypes.object.isRequired,
  getTasks: PropTypes.func.isRequired
}
const mapStateProps = state => ({
  // refers to root reducer
  task: state.task
})

export default connect(mapStateProps, { getTasks })(Tasks)
