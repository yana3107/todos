import './index.css';

import NewTaskForm from './components/NewTaskForm.jsx';
import TaskList from './components/TaskList.jsx';
import Footer from './components/Footer.jsx';

function App() {
    const tasks = [
        {
            id: 1,
            description: 'Completed task',
            completed: true,
            createdAt: new Date(),
        },
        {
            id: 2,
            description: 'Editing task',
            completed: false,
            createdAt: new Date(),
        },
        {
            id: 3,
            description: 'Active task',
            completed: false,
            createdAt: new Date(),
        },
    ];

    return (
        <section className="todoapp">
            <NewTaskForm />

            <section className="main">
                <TaskList tasks={tasks} />
                <Footer />
            </section>
        </section>
    );
}

export default App;