import { connect } from 'react-redux'
import ToDoListItem from '../ToDoListItem'
import { removeToDo, toggleFavourite } from '../../store/slices/todoSlice'

function ToDoList ({ toDo, remove, toggle }) {
  const mapToDoList = t => (
    <ToDoListItem key={t.id} toDo={t} remove={remove} toggle={toggle} />
  )
  return (
    <section>
      <ul>{toDo.map(mapToDoList)}</ul>
    </section>
  )
}

const mapStateToProps = ({ todoList }) => todoList

const mapDispatchToProps = dispatch => ({
  remove: id => dispatch(removeToDo(id)),
  toggle: id => dispatch(toggleFavourite(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)
