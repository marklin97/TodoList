import React from 'react'

const AddBtn = () => {
  return (
    <div className='fixed-action-btn'>
      <a
        href='#add-task-modal'
        className='btn-floating btn-large green modal-trigger'
      >
        <i className='large material-icons'>add</i>
      </a>
    </div>
  )
}

export default AddBtn
