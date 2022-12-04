import React, {useState, useEffect, useRef} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import '../../../css/dataForm.css'
import Dropdown from './dropdown'
import Button from '../common/button'

const DataForm = () => {
  const [formData, setFormData] = useState({
    start: Date.now(),
    end: Date.now(),
    adult: 2,
    children: 0
  })

  const transformDate = (data) => {
    if (start && end) {
      return data.getTime()
    }
  }

  const {start, end, adult, children} = formData

  const handleDateChange = (dates) => {
    const [start, end] = dates
    setFormData((prev) => ({...prev, start, end}))
  }

  const handleIncrement = ({target}) => {
    const {value, name} = target
    setFormData((prevState) => ({
      ...prevState,
      [name]: +value + 1
    }))
  }

  const handleDecrement = ({target}) => {
    const {value, name} = target
    setFormData((prevState) => ({
      ...prevState,
      [name]: +value - 1
    }))
  }

  // обработка события отправки формы
  const handleSubmit = (e) => {
    e.preventDefault()

    const startData = transformDate(start)
    const endData = transformDate(end)
    const people = adult + children
    console.log(startData, endData, people)
  }
  return (
    <>
      <form
        className="row g-3 bg-light mt-1 px-4 py-2 rounded d-flex align-items-center"
        onSubmit={handleSubmit}
      >
        <div className="col m-0 p-0">
          <DatePicker
            selectsRange
            dateFormat="dd.MM.yyyy"
            selected={start}
            startDate={start}
            endDate={end}
            onChange={handleDateChange}
            minDate={Date.now()}
            placeholderText={`${start} - ${end} `}
            className="date-picker-input "
          />
        </div>
        <div className="col m-0 p-0 ">
          <Dropdown
            adult={adult}
            childrens={children}
            handleInc={handleIncrement}
            handleDec={handleDecrement}
          />
        </div>

        <div className="col m-0 p-0 d-flex justify-content-end submit">
          <Button text="Поиск" type="submit" />
        </div>
      </form>
    </>
  )
}

export default DataForm
