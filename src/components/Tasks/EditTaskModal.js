import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { updateTask, setCurrent } from '../../actions/taskAction'
import M from 'materialize-css/dist/js/materialize.min.js'
const EditTaskModal = ({ current, updateTask }) => {
  const [title, setTitle] = useState('')
  const [assign, setAssign] = useState('')
  const [status, setStatus] = useState('')

  useEffect(() => {
    if (current) {
      setTitle(current.title)
      setAssign(current.title)
      setStatus(current.status)
    }
  }, [current])

  const onSubmit = () => {
    if (title === '' || assign === '') {
      M.toast({ html: 'Please enter the details ' })
    } else {
      const inputs = {
        id: current.id,
        title,
        status,
        date: new Date()
      }
      updateTask(inputs)
      M.toast({ html: 'Log updated' })
      //Clear fields
      setTitle('')
      setAssign('')
      setStatus('')
    }
  }
  return (
    <div id='edit-task-modal' className='modal' style={modalStyle}>
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
const mapStateToProps = state => ({
  current: state.task.current
})
export default connect(mapStateToProps, { updateTask })(EditTaskModal)
