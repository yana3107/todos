import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { ru } from "date-fns/locale";
import PropTypes from "prop-types";

function Task({ task, toggleTask, deleteTask, updateTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const timeAgo = formatDistanceToNow(task.createdAt, {
    addSuffix: true,
    locale: ru,
  });

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      if (editedDescription.trim() === "") return;

      updateTask(task.id, editedDescription.trim());
      setIsEditing(false);
    }

    if (event.key === "Escape") {
      setEditedDescription(task.description);
      setIsEditing(false);
    }
  }

  return (
    <li
      className={`${task.completed ? "completed" : ""} ${
        isEditing ? "editing" : ""
      }`}
    >
      {isEditing && (
        <input
          className="edit"
          value={editedDescription}
          onChange={(event) => setEditedDescription(event.target.value)}
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
          <span className="created-at"> создано {timeAgo}</span>
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

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    createdAt: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
  toggleTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
};

export default Task;
