import { connect } from "react-redux";
import { deleteUser } from "../../store/slices/usersSlice";
import styles from "./UsersList.module.css";

function UsersList({ users, deleteUserByPhoneNumber }) {
  return (
    <section className={styles.sectionContainer}>
      {users.map((u) => (
        <div key={u.firstName} className={styles.cardsContainer}>
          <h2>
            {u.firstName} {u.lastName}
          </h2>
          <p>{u.phoneNumber}</p>
          <button
            onClick={() => deleteUserByPhoneNumber(u.phoneNumber)}
            className={styles.delBtn}
          >
            Delete user
          </button>
        </div>
      ))}
    </section>
  );
}

const mapStateToProps = ({ usersList }) => usersList;

const mapDispatchToProps = (dispatch) => ({
  deleteUserByPhoneNumber: (phoneNumber) => dispatch(deleteUser(phoneNumber)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
