import ToDoItem from "./ToDoItem";
import type { TODO, TODOActions } from "../types/todo";
import type { Dispatch } from "react";

interface Props {
    todos: TODO[];
    dispatchTODO: Dispatch<TODOActions>
}

function ToDoList({ todos, ...props }: Props) {
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
                <ToDoItem key={todo.id} todo={todo} {...props} />
            ))}
        </ul>
    );
}

export default ToDoList;
