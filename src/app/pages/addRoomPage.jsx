import React, {useEffect, useRef, useState} from 'react'
import PropTypes from 'prop-types'
import TextField from '../components/common/form/textField'
import TextAreaField from '../components/common/form/textAreaField'
import SelectField from '../components/common/form/selectField'
import Button from '../components/common/button'
import '../../css/editRoomsPage.css'
import BackButton from '../components/common/backButton'
import {useCategory} from '../hooks/useCategory'
import {validator} from '../utils/validateRules'
import {useRooms} from '../hooks/useRooms'

const AddRoomsPage = ({onSubmit}) => {
  const [data, setData] = useState({})
  const {category} = useCategory()
  const [errors, setErrors] = useState({})
  const {createRoom} = useRooms()

  const categoryList = category.map((с) => ({
    label: с.name,
    value: с.id
  }))

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }))
  }

  const validatorConfig = {
    title: {
      isRequired: {
        message: 'Заголовок обязательно должен быть заполнен'
      }
    },
    description: {
      isRequired: {
        message: 'Описание номера обязательно должно быть заполнено'
      }
    },
    price: {
      isRequired: {
        message: 'Укажите стоимость номера'
      }
    },
    category: {
      isRequired: {
        message: 'Выберите категорию номера'
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

  const clearForm = () => {
    setData({})
    setErrors({})
  }

  const handeleSubmit = async (e) => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) return
    onSubmit(data)
    console.log(data)
    clearForm()
    // try {
    //   await createRoom(data)
    //   //   history.push('/')
    // } catch (error) {
    //   setErrors(error)
    //   console.log(error)
    // }
  }

  return (
    <div className="card  m-5 px-5">
      <div className="card-body">
        <BackButton />
        <h3 className="edit-title mt-5">Добавить новый номер:</h3>
        <div className="form-body w-50">
          <form onSubmit={handeleSubmit}>
            <TextField
              label="Title"
              name="title"
              onChange={handleChange}
              value={data.title || ''}
              error={errors.title}
              placeholder="Title Room"
            />
            <TextAreaField
              label="Description"
              name="description"
              onChange={handleChange}
              value={data.description || ''}
              error={errors.description}
              placeholder="Description Room"
            />
            <TextField
              label="Price"
              name="price"
              onChange={handleChange}
              value={data.price || ''}
              error={errors.price}
              placeholder="Price Room"
            />
            {/* <FileField
              label="Image"
              name="image"
              onChange={handleChange}
              error={errors.image}
              //   value={form.image}
            /> */}
            <SelectField
              label="Category"
              name="category"
              defaultOption="Выберите категорию..."
              options={categoryList}
              onChange={handleChange}
              value={data.category || ''}
              error={errors.category}
              placeholder="Category Room"
            />
            <Button type="submit" text="Добавить" disabled={!isValid}></Button>
          </form>
        </div>
      </div>
    </div>
  )
}

AddRoomsPage.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default AddRoomsPage
