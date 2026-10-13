import TasksFilter from './TasksFilter.jsx';

function Footer() {
    return (
        <footer className="footer">
            <span className="todo-count">3 items left</span>

            <TasksFilter />

            <button className="clear-completed">
                Clear completed
            </button>
        </footer>
    );
}

export default Footer;