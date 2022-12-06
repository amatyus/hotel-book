import React, {useEffect, useState} from 'react'
import {validator} from '../../utils/validateRules'
import TextField from '../common/form/textField'
import Button from '../common/button'
import {useAuth} from '../../hooks/useAuth'
import {useHistory} from 'react-router-dom'

const RegisterForm = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const history = useHistory()
  const {signUp} = useAuth()
  const [errors, setErrors] = useState({})

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }))
  }
  const validatorConfig = {
    email: {
      isRequired: {
        message: 'Электронная почта обязательна для заполнения'
      },
      isEmail: {
        message: 'Email введен некорректно'
      }
    },
    name: {
      min: {
        message: 'Имя должно состоять минимум из 2 букв',
        value: 2
      }
    },
    password: {
      isRequired: {
        message: 'Пароль обязателен для заполнения'
      },
      isCapitalSymbol: {
        message: 'Пароль должен содержать хотя бы одну заглавную букву'
      },
      isContainDigit: {
        message: 'Пароль должен содержать хотя бы одно число'
      },
      min: {
        message: 'Пароль должен состоять минимум из 8 символов',
        value: 8
      }
    }
  }
  useEffect(() => {
    validate()
  }, [data])

  const validate = () => {
    const errors = validator(data, validatorConfig)
    setErrors(errors)
    return Object.keys(errors).length === 0
  }
  const isValid = Object.keys(errors).length === 0

  const handleSubmit = async (e) => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) return
    try {
      await signUp(data)
      history.push('/')
    } catch (error) {
      setErrors(error)
      console.log(error)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="name"
        value={data.name}
        onChange={handleChange}
        error={errors.name}
        placeholder="Name"
      />
      <TextField
        name="email"
        value={data.email}
        onChange={handleChange}
        error={errors.email}
        placeholder="Email"
      />
      <TextField
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
        error={errors.password}
        placeholder="Password"
      />

      <Button text="submit" type="submit" disabled={!isValid} />
    </form>
  )
}

export default RegisterForm
