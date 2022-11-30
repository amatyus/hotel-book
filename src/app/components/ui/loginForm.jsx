import React, {useState, useEffect} from 'react'
import TextField from '../common/form/textField'
import {validator} from '../../utils/validateRules'
import Button from '../common/button'
import {useAuth} from '../../hooks/useAuth'
import {useHistory} from 'react-router-dom'

const LoginForm = () => {
  const [data, setData] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({})
  const [enterError, setEnterError] = useState(null)
  const history = useHistory()
  const {logIn} = useAuth()

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }))
    setEnterError(null)
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
      await logIn(data)
      history.push(
        history.location.state ? history.location.state.from.pathname : '/'
      )
    } catch (error) {
      setEnterError(error.message)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
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
      {enterError && <p className="text-danger">{enterError}</p>}

      <Button text="Submit" type="submit" disabled={!isValid || enterError} />
    </form>
  )
}

export default LoginForm
