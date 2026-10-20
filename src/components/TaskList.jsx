import Task from "./Task.jsx";
import PropTypes from "prop-types";
function TaskList({ tasks, toggleTask, deleteTask, updateTask }) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      ))}
    </ul>
  );
}
TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  toggleTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
};
export default TaskList;
