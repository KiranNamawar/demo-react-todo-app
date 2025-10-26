import ToDoItem from "./ToDoItem";
import type { TODO } from "../types/todo";


function ToDoList({ todos }: {
    todos: TODO[];
}) {
    if (todos.length === 0) {
        return (
            <div className="empty-todo-list">
                <p>No todos yet! 📝</p>
                <p>Start by adding your first task above.</p>
            </div>
        );
    }

    return (
        <ul className="todo-list">
            {todos.map((todo) => (
                <ToDoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
}

export default ToDoList;
