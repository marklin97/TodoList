import React from 'react'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteTask, setCurrent } from '../../actions/taskAction'
import M from 'materialize-css/dist/js/materialize.min.js'

const TaskItem = ({ task, deleteTask, setCurrent }) => {
  const onDelete = () => {
    deleteTask(task.id)
    M.toast({ html: 'Task Deleted' })
  }
  return (
    <li className='collection-item'>
      <div>
        <a
          href='#edit-task-modal'
          className={`modal-trigger ${task.urgent ? 'red-text' : 'green-text'}`}
          onClick={() => setCurrent(task)}
        >
          <span className='black-text'>{task.id}.</span> {task.title}
        </a>
        <br />
        <span className='grey-text'>
          {''} take charged by {''}
          <span className='black-text'>{task.assign}</span>
          {''} on {''}
          <Moment format='MMMM Do YYYY,h:mm:ss a'>{task.date}</Moment>
        </span>
        <a href='#!' onClick={onDelete} className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  )
}
TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired
}
export default connect(null, { deleteTask, setCurrent })(TaskItem)
