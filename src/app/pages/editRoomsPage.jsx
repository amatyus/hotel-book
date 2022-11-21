import React, {useEffect, useRef, useState} from 'react'
import PropTypes from 'prop-types'
import TextField from '../components/common/form/textField'
import TextAreaField from '../components/common/form/textAreaField'
import SelectField from '../components/common/form/selectField'
import Button from '../components/common/button'
import '../../css/editRoomsPage.css'
import BackButton from '../components/common/backButton'
import FileField from '../components/common/form/fileField'
import roomService from '../services/room.service'
import {useRooms} from '../hooks/useRooms'
import Category from '../components/ui/category'

const EditRoomsPage = ({edit}) => {
  const {getRoom, updateRoom} = useRooms()
  const rooms = getRoom(edit)
  console.log(rooms)
  const [data, setData] = useState(rooms)
  //   const [errors, setErrors] = useState({})

  const handeleSubmit = (e) => {
    e.preventDefault()
    updateRoom(edit, data)
    console.log(data)
  }
  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }))
  }
  return (
    <div className="card  m-5 px-5">
      <div className="card-body">
        <BackButton />
        <h3 className="edit-title mt-5">Редактировать данные о номере:</h3>
        <div className="form-body w-50">
          <form onSubmit={handeleSubmit}>
            <TextField
              label="Title"
              name="title"
              onChange={handleChange}
              value={data.title || ''}
            />

            <TextAreaField
              label="Description"
              name="description"
              onChange={handleChange}
              value={data.description || ''}
            />
            <TextField
              label="Price"
              name="price"
              onChange={handleChange}
              value={data.price || ''}
            />
            <FileField
              label="Image"
              name="image"
              onChange={handleChange}
              //   value={form.image}
            />
            <SelectField
              label="Category"
              name="category"
              // options={colors}
              onChange={handleChange}
              value={data.category || ''}
            />
            <Category id={rooms.category} />
            <Button type="submit" text="Сохранить изменения"></Button>
          </form>
        </div>
      </div>
    </div>
  )
}

EditRoomsPage.propTypes = {
  edit: PropTypes.string.isRequired
}

export default EditRoomsPage
