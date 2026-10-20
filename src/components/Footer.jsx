import TasksFilter from "./TasksFilter.jsx";
import PropTypes from "prop-types";
function Footer({ filter, setFilter, activeTasksCount, clearCompleted }) {
  return (
    <footer className="footer">
      <span className="todo-count">{activeTasksCount} items left</span>

      <TasksFilter filter={filter} setFilter={setFilter} />

      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}
Footer.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  activeTasksCount: PropTypes.number.isRequired,
  clearCompleted: PropTypes.func.isRequired,
};
export default Footer;
