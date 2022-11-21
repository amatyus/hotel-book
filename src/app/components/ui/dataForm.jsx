import React, {useState, useEffect, useRef} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import '../../../css/dataForm.css'
import Dropdown from './dropdown'
import Button from '../common/button'

const DataForm = () => {
  const [formData, setFormData] = useState({
    start: new Date(),
    end: new Date(),
    adult: 2,
    children: 0
  })

  const {start, end, adult, children} = formData

  //   const transformDate = (data) => {
  //     return data.getTime()
  //   }

  const handleDateChange = (dates) => {
    const [start, end] = dates
    console.log(formData)

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

    console.log(formData)
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
            minDate={new Date()}
            // placeholderText="Заезд - Отъезд"
            placeholderText={`${start}  - ${end} `}
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
