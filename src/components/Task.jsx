function Task({ task }) {
    return (
        <li className={task.completed ? 'completed' : ''}>
            <div className="view">
                <input
                    className="toggle"
                    type="checkbox"
                    checked={task.completed}
                    readOnly
                />

                <label>
                    <span className="description">
                        {task.description}
                    </span>
                </label>

                <button className="icon icon-edit"></button>
                <button className="icon icon-destroy"></button>
            </div>
        </li>
    );
}
export default Task;