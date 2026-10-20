import TasksFilter from "./TasksFilter.jsx";

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

export default Footer;
