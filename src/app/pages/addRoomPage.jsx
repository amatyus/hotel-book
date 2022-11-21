import React, {useEffect, useRef, useState} from 'react'
import PropTypes from 'prop-types'
import TextField from '../components/common/form/textField'
import TextAreaField from '../components/common/form/textAreaField'
import SelectField from '../components/common/form/selectField'
import Button from '../components/common/button'
import '../../css/editRoomsPage.css'
import BackButton from '../components/common/backButton'
import FileField from '../components/common/form/fileField'

const AddRoomsPage = ({onSubmit}) => {
  const [data, setData] = useState({})
  //   const [errors, setErrors] = useState({})

  const handeleSubmit = (e) => {
    e.preventDefault()
    onSubmit(data)
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
        <h3 className="edit-title mt-5">Добавить новый номер:</h3>
        <div className="form-body w-50">
          <form onSubmit={handeleSubmit}>
            <TextField
              label="id"
              name="id"
              onChange={handleChange}
              value={data.id || ''}
            />
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
            <Button type="submit" text="Добавить"></Button>
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
