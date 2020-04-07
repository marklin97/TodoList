import React, { useEffect, Fragment } from 'react'
import SearchBar from './components/layout/SearchBar'
import Tasks from './components/Tasks/Tasks'
import AddBtn from './components/layout/AddBtn'
import AddTaskModal from './components/Tasks/AddTaskModal'
import EditTaskModal from './components/Tasks/EditTaskModal'
import { Provider } from 'react-redux'
import store from './store'

import 'materialize-css/dist/css/materialize.min.css'
import './App.css'
import M from 'materialize-css/dist/js/materialize.min.js'

const App = () => {
  useEffect(() => {
    // initialse materialize js
    M.AutoInit()
  })
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className='container'>
          <AddBtn />
          <AddTaskModal />
          <EditTaskModal />
          <Tasks />
        </div>
      </Fragment>
    </Provider>
  )
}

export default App
