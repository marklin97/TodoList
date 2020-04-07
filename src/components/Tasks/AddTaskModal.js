import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTask } from '../../actions/taskAction'
import M from 'materialize-css/dist/js/materialize.min.js'
const AddTaskModal = ({ addTask }) => {
  const [title, setTitle] = useState('')
  const [assign, setAssign] = useState('')
  const [status, setStatus] = useState('')

  const onSubmit = () => {
    if (title === '' || assign === '') {
      M.toast({ html: 'Please enter the details ' })
    } else {
      const newTask = {
        title,
        assign,
        status,
        date: new Date()
      }
      addTask(newTask)
      M.toast({ html: 'New task added' })
      //Clear fields
      setTitle('')
      setAssign('')
      setStatus('')
    }
  }
  return (
    <div id='add-task-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Add new task</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='title'
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <label htmlFor='title' className='active'>
              Enter task title
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='assign'
              value={assign}
              onChange={e => setAssign(e.target.value)}
            />
            <label htmlFor='assign' className='active'>
              Enter the person in charge
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={status}
                  value={status}
                  onChange={e => setStatus(!status)}
                />
                <span> Needs to be completed urgently</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect green waves-light btn'
        >
          Enter
        </a>
      </div>
    </div>
  )
}

const modalStyle = {
  width: '50%',
  height: '75%'
}
export default connect(null, { addTask })(AddTaskModal)
