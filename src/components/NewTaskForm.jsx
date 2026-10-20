import { useState } from "react";
import PropTypes from "prop-types";
function NewTaskForm({ addTask }) {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value.trim() === "") return;

    addTask(value);
    setValue("");
  };

  return (
    <header className="header">
      <h1>todos</h1>

      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </form>
    </header>
  );
}
NewTaskForm.propTypes = {
  addTask: PropTypes.func,
};

export default NewTaskForm;
