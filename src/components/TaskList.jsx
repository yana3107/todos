import Task from './Task.jsx';

function TaskList({ tasks }) {
    return (
        <ul className="todo-list">
            {tasks.map((task) => (
                <Task key={task.id} task={task} />
            ))}
        </ul>
    );
}

export default TaskList;