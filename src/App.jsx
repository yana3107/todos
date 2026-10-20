import "./index.css";

import NewTaskForm from "./components/NewTaskForm.jsx";
import TaskList from "./components/TaskList.jsx";
import Footer from "./components/Footer.jsx";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        const newTasks = data.slice(0, 10).map((task) => ({
          id: task.id,
          description: task.title,
          completed: task.completed,
          createdAt: new Date(),
        }));

        setTasks(newTasks);
      })
      .catch((error) => {
        console.error("Error loading tasks:", error);
      });
  }, []);

  function addTask(newText) {
    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        description: newText,
        completed: false,
        createdAt: new Date(),
      },
    ]);
  }

  function toggleTask(id) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  function updateTask(id, newDescription) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, description: newDescription } : task,
      ),
    );
  }

  function clearCompleted() {
    setTasks((prev) => prev.filter((task) => !task.completed));
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Active") {
      return !task.completed;
    }

    if (filter === "Completed") {
      return task.completed;
    }

    return true;
  });

  const activeTasksCount = tasks.filter((task) => !task.completed).length;

  return (
    <section className="todoapp">
      <NewTaskForm addTask={addTask} />

      <section className="main">
        <TaskList
          tasks={filteredTasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />

        <Footer
          filter={filter}
          setFilter={setFilter}
          activeTasksCount={activeTasksCount}
          clearCompleted={clearCompleted}
        />
      </section>
    </section>
  );
}

export default App;
