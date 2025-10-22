import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ToDoList from "./components/ToDoList";
import NewToDo from "./components/NewToDo";
import type { TODO } from "./types/todo";

function App() {
    const [todos, setTodos] = useState<TODO[]>([]);

    function addTodo(todo: TODO) {
        setTodos([todo, ...todos]);
    }

    function updateToDo(todo: TODO) {
        setTodos((prev) => prev.map((t) => (t.id === todo.id ? todo : t)));
    }

    function deleteToDo(id: string) {
        setTodos((prev) => prev.filter((t) => t.id !== id));
    }

    return (
        <div id="app">
            <Header />
            <main>
                <NewToDo addTodo={addTodo} />
                <ToDoList
                    todos={todos}
                    updateToDo={updateToDo}
                    deleteToDo={deleteToDo}
                />
            </main>
            <Footer />
        </div>
    );
}

export default App;
