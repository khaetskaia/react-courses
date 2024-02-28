import { useForm } from 'react-hook-form'

const ReactHookForm = () => {
  const { register, handleSubmit, formState: { isValid }} = useForm({
    defaultValues: {
      name: '',
      terms: false
    }
  })

  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2))
  }

  return (
    <div>
      <h2>React Hook Form</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label >Name
            <input
              type="text"
              {...register('name', { required: true })}
            />
        </label>
        </div>

        <div>
          <label >Согласен с правилами приложения
            <input
              type="checkbox"
              {...register('terms', { required: true })}
            />
        </label>
        </div>

        <button type="submit" disabled={!isValid}>Submit</button>
      </form>
    </div>
  )
}


export default ReactHookForm