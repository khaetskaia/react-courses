import { useRef } from 'react'

const UncontrolledForm = () => {
  const inputRef = useRef({
    name: '',
    terms: false
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    const values = {  
      name: inputRef.current.name.value, 
      terms: inputRef.current.terms.checked 
    }

    if(!inputRef.current.terms.checked) return  alert("Согласитесь с правилами приложения")
    alert(JSON.stringify(values, null, 2))
  }

  return (
    <div>
      <h2>Uncontrolled</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label >Name
            <input
              type="text"
              name="name"
              ref={el => inputRef.current.name = el}
            />
        </label>
        </div>

        <div>
          <label >Согласен с правилами приложения
            <input
              type="checkbox"
              name="terms"
              ref={(el) => inputRef.current.terms = el}
            />
        </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}


export default UncontrolledForm