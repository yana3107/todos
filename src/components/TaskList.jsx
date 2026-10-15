import Task from './Task.jsx';

function TaskList({ tasks, toggleTask, deleteTask, updateTask }) {
    return (
        <ul className="todo-list">
            {tasks.map((task) => (
                <Task key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} updateTask={updateTask} />
            ))}
        </ul>
    );
}

export default TaskList;