import { ErrorMessage, Field, Form, Formik } from 'formik'
import { connect } from 'react-redux'
import { TODO_VALIDATION_SCHEMA } from '../../utils/validationsSchemas.js'
import { createTodo } from '../../store/slices/todoSlice.js'
import styles from './ToDoForm.module.css'
function ToDoForm ({ create }) {
  const initialValues = {
    toDo: ''
  }
  const submitHandler = (values, { resetForm }) => {
    create(values)
    resetForm()
  }

  return (
    <section className={styles.formContainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={TODO_VALIDATION_SCHEMA}
      >
        <Form>
          <label>
            <span>New Todo: </span>
            <Field
              type='text'
              name='toDo'
              placeholder='new Todo'
              autoFocus
              className={styles.input}
            />
            <ErrorMessage
              name='toDo'
              component='div'
              className={styles.error}
            />
          </label>
          <button className={styles.submitBtn} type='submit'>
            Add
          </button>
        </Form>
      </Formik>
    </section>
  )
}

const mapDispatchToProps = dispatch => ({
  create: values => dispatch(createTodo(values))
})

export default connect(null, mapDispatchToProps)(ToDoForm)
