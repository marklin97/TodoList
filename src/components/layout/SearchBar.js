import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { searchTasks } from '../../actions/taskAction'

export const SearchBar = ({ searchTasks }) => {
  const text = useRef('')
  const onChange = e => {
    searchTasks(text.current.value)
  }
  return (
    <nav style={{ marginBottom: '20px' }} className='green'>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input
              id='search'
              type='search'
              placeholder='Search Logs...'
              ref={text}
              onChange={onChange}
            />
            <label className='label-icon' htmlFor='search'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
        </form>
      </div>
    </nav>
  )
}
export default connect(null, { searchTasks })(SearchBar)
