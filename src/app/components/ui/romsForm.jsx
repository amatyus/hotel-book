// import React, {useState, useEffect, useRef} from 'react'
// import DatePicker from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css'
// import '../../../css/dataForm.css'
// import Dropdown from './dropdown'
// import Button from '../common/button'
// import TextField from '../common/form/textField'
// import TextAreaField from '../common/form/textAreaField'
// import FileField from '../common/form/fileField'
// import SelectField from '../common/form/selectField'

// const RoomsForm = ({data, onSubmit}) => {
//   return (
//     <>
//       <form onSubmit={handeleSubmit}>
//         <TextField
//           label="Title"
//           name="title"
//           onChange={handleChange}
//           value={data.title || ''}
//         />

//         <TextAreaField
//           label="Description"
//           name="description"
//           onChange={handleChange}
//           value={data.description || ''}
//         />
//         <TextField
//           label="Price"
//           name="price"
//           onChange={handleChange}
//           value={data.price || ''}
//         />
//         <FileField
//           label="Image"
//           name="image"
//           onChange={handleChange}
//           //   value={form.image}
//         />
//         <SelectField
//           label="Category"
//           name="category"
//           // options={colors}
//           onChange={handleChange}
//           value={data.category || ''}
//         />
//         <Button type="submit" text="Сохранить изменения"></Button>
//       </form>
//     </>
//   )
// }

// export default RoomsForm
