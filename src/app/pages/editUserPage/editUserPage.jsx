import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import TextField from '../../components/common/form/textField'
import SelectField from '../../components/common/form/selectField'
import {useAuth} from '../../hooks/useAuth'
import BackButton from '../../components/common/backButton'
import {validator} from '../../utils/validateRules'

const EditUserPage = () => {
  const history = useHistory()
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState()
  const {currentUser, updateUserData} = useAuth()
  const [errors, setErrors] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) return

    history.push(`/users/${currentUser._id}`)
  }

  useEffect(() => {
    if (data && isLoading) {
      setIsLoading(false)
    }
  }, [data])

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
      isRequired: {
        message: 'Введите ваше имя'
      }
    }
  }
  useEffect(() => {
    validate()
  }, [data])
  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }))
  }
  const validate = () => {
    const errors = validator(data, validatorConfig)
    setErrors(errors)
    return Object.keys(errors).length === 0
  }
  const isValid = Object.keys(errors).length === 0
  return (
    <div className="container mt-5">
      <BackButton />
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          <form onSubmit={handleSubmit}>
            <TextField
              label="Имя"
              name="name"
              //   value={data.name}
              onChange={handleChange}
              error={errors.name}
            />
            <TextField
              label="Электронная почта"
              name="email"
              //   value={data.email}
              onChange={handleChange}
              error={errors.email}
            />

            <button
              type="submit"
              disabled={!isValid}
              className="btn btn-primary w-100 mx-auto"
            >
              Обновить
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditUserPage
