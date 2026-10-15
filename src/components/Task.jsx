import { useState } from 'react';

function Task({ task, toggleTask, deleteTask, updateTask }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedDescription, setEditedDescription] = useState(task.description);

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            updateTask(task.id, editedDescription);
            setIsEditing(false);
        }

        if (event.key === 'Escape') {
            setEditedDescription(task.description);
            setIsEditing(false);
        }
    }

    return (
        <li
            className={`${task.completed ? 'completed' : ''} ${
                isEditing ? 'editing' : ''
            }`}
        >
            {isEditing && (
                <input
                    className="edit"
                    value={editedDescription}
                    onChange={(event) =>
                        setEditedDescription(event.target.value)
                    }
                    onKeyDown={handleKeyDown}
                    autoFocus
                />
            )}

            <div className="view">
                <input
                    className="toggle"
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                />

                <label>
                    <span className="description">{task.description}</span>
                </label>

                <button
                    type="button"
                    className="icon icon-edit"
                    onClick={() => {
                        setEditedDescription(task.description);
                        setIsEditing(true);
                    }}
                ></button>

                <button
                    type="button"
                    className="icon icon-destroy"
                    onClick={() => deleteTask(task.id)}
                ></button>
            </div>
        </li>
    );
}

export default Task;