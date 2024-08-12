import ToDoForm from '../../components/TodoForm'
import ToDoList from '../../components/TodoList'

function ToDoPage () {
  return (
    <div>
      <h1>Write your Todo</h1>
      <ToDoForm />
      <ToDoList />
    </div>
  )
}

export default ToDoPage
