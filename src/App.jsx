/* eslint-disable react/prop-types */
import './App.css'
import ControlledForm from './ControlledForm'
import ReactHookForm from './ReactHookForm'
import UncontrolledForm from './UncontrolledForm'


function App() {
  

  return (
    <div>
      <ControlledForm />

      <UncontrolledForm/>

      <ReactHookForm />
    </div>
  )
}

export default App
