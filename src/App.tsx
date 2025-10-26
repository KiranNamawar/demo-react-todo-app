import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ToDoList from "./components/ToDoList";
import NewToDo from "./components/NewToDo";
import { useToDos } from "./ToDoContext";

function App() {
    const [hideCompleted, setHideCompleted] = useState(false);
    const [todos] = useToDos();
    const filtered = todos.filter((t) => !t.done);

    return (
        <div id="app">
            <Header />
                <main>
                    <NewToDo />
                    {todos.length > 0 && (
                        <div className="todo-stat">
                            <p>
                                {filtered.length} of {todos.length} Remaining
                            </p>
                            <button
                                onClick={() => setHideCompleted(!hideCompleted)}
                            >
                                {hideCompleted ? "Show" : "Hide"} Completed
                            </button>
                        </div>
                    )}
                    <ToDoList
                        todos={hideCompleted ? filtered : todos}
                    />
                </main>
            <Footer />
        </div>
    );
}

export default App;
