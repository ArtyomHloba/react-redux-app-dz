import { ErrorMessage, Field, Form, Formik } from 'formik'
import { connect } from 'react-redux'
import { TODO_VALIDATION_SCHEMA } from '../../utils/validationsSchemas.js'
import { createTodo } from '../../store/slices/todoSlice.js'
function ToDoForm ({ create }) {
  const initialValues = {
    toDo: ''
  }
  const submitHandler = (values, { resetForm }) => {
    create(values)
    resetForm()
  }

  return (
    <section>
      <h2>New Todo</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={TODO_VALIDATION_SCHEMA}
      >
        <Form>
          <label>
            <span>Whrite your Todo</span>
            <Field type='text' name='toDo' placeholder='new Todo' autoFocus />
            <ErrorMessage name='toDo' component='span' />
          </label>
          <button type='submit'>Add</button>
        </Form>
      </Formik>
    </section>
  )
}

const mapDispatchToProps = dispatch => ({
  create: values => dispatch(createTodo(values))
})

export default connect(null, mapDispatchToProps)(ToDoForm)
