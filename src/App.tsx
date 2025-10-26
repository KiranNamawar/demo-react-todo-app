import { useReducer, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ToDoList from "./components/ToDoList";
import NewToDo from "./components/NewToDo";
import type { TODO, TODOActions } from "./types/todo";

function App() {
    const [todos, dispatchTODO] = useReducer(todoReducer, []);
    const [hideCompleted, setHideCompleted] = useState(false);

    const filtered = todos.filter((t) => !t.done);

    return (
        <div id="app">
            <Header />
            <main>
                <NewToDo dispatchTODO={dispatchTODO} />
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
                    dispatchTODO={dispatchTODO}
                />
            </main>
            <Footer />
        </div>
    );
}

export default App;

function todoReducer(todos: TODO[], action: TODOActions) {
    switch (action.type) {
        case "add": {
            return [...todos, action.todo];
        }
        case "update": {
            return todos.map((t) =>
                t.id === action.todo.id ? action.todo : t
            );
        }
        case "delete": {
            return todos.filter((t) => t.id !== action.id);
        }
        default: {
            // No state change for unknown actions
            return todos;
        }
    }
}
