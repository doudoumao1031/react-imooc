import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

function ReactHookFormDemo() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>()

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          {...register('firstName', { required: 'First name is required' })}
        />
        {errors.firstName && <span>{errors.firstName.message}</span>}
      </div>

      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          {...register('lastName', { required: 'Last name is required' })}
        />
        {errors.lastName && <span>{errors.lastName.message}</span>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          {...register('password', { required: 'Password is required' })}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}

export default ReactHookFormDemo
