import { useFormik } from 'formik'

export function useCustomFormik(props) {
  const formik = useFormik(props)

  function handleFormSubmit(event) {
    event.preventDefault()
    formik.handleSubmit()
  }

  return { formik, handleFormSubmit }
}

export function getFieldProps(formik, fieldName) {
  return formik.getFieldProps(fieldName)
}

export function getFieldValue(formik, fieldName) {
  return formik.values[fieldName]
}

export function getFieldError(formik, fieldName) {
  return formik.touched[fieldName] && formik.errors[fieldName]
}

export function getFieldTouched(formik, fieldName) {
  return formik.touched[fieldName]
}

// import { useCustomFormik, getFieldProps, getFieldValue, getFieldError, getFieldTouched } from './formik.service.js'

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
}

const onSubmit = (values) => {
  console.log(values)
}

const { formik, handleFormSubmit } = useCustomFormik({
  initialValues,
  onSubmit,
})

return (
  <form onSubmit={handleFormSubmit}>
    <input {...getFieldProps(formik, 'firstName')} />
    {getFieldTouched(formik, 'firstName') && getFieldError(formik, 'firstName')}

    <input {...getFieldProps(formik, 'lastName')} />
    {getFieldTouched(formik, 'lastName') && getFieldError(formik, 'lastName')}

    <input {...getFieldProps(formik, 'email')} />
    {getFieldTouched(formik, 'email') && getFieldError(formik, 'email')}

    <button type="submit">Submit</button>
  </form>
)