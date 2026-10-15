import "./index.css";

import NewTaskForm from "./components/NewTaskForm.jsx";
import TaskList from "./components/TaskList.jsx";
import Footer from "./components/Footer.jsx";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: "Completed task",
      completed: true,
      createdAt: new Date(),
    },
    {
      id: 2,
      description: "Editing task",
      completed: false,
      createdAt: new Date(),
    },
    {
      id: 3,
      description: "Active task",
      completed: false,
      createdAt: new Date(),
    },
  ]);
  function toggleTask(id) {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      }),
    );
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  function updateTask(id, newDescription) {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            description: newDescription,
          };
        }
        return task;
      }),
    );
  }
  return (
    <section className="todoapp">
      <NewTaskForm />

      <section className="main">
        <TaskList
          tasks={tasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
        <Footer />
      </section>
    </section>
  );
}

export default App;
