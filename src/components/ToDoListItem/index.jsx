import { FaStar, FaCheckCircle } from 'react-icons/fa'
import classNames from 'classnames'
import styles from './ToDoListItem.module.css'

function ToDoListItem ({ toDo: { id, value, isFavourite }, remove, toggle }) {
  const starBtnClasses = classNames(styles.starBtn, {
    [styles.starBtnActive]: isFavourite
  })

  return (
    <li className={styles.toDoItem}>
      <p>{value}</p>
      <button onClick={() => remove(id)} className={styles.checkBtn}>
        <FaCheckCircle />
      </button>
      <button className={styles.starBtn} onClick={() => toggle(id)}>
        <FaStar className={starBtnClasses} />
      </button>
    </li>
  )
}

export default ToDoListItem
