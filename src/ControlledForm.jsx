import { useState } from 'react'

const ControlledForm = () => {
  const [values, setValues] = useState({
    name: '',
    terms: false
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    alert(JSON.stringify(values, null, 2))
  }

  return (
    <div>
      <h2>Controlled Form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label >Name
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={(e) => {
                setValues((prev) => ({
                  ...prev,
                  name: e.target.value
                }))
              }}
            />
        </label>
        </div>

        <div>
          <label >Согласен с правилами приложения
            <input
              type="checkbox"
              name="terms"
              value={values.name}
              onChange={(e) => {
                setValues((prev) => ({
                  ...prev,
                  terms: e.target.checked
                }))
              }}
            />
        </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}


export default ControlledForm