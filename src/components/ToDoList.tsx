import ToDoItem from "./ToDoItem";
import type { TODO } from "../types/todo";

interface Props {
    todos: TODO[];
    updateToDo: (todo: TODO) => void;
    deleteToDo: (id: string) => void;
}

function ToDoList({ todos, ...props }: Props) {
    return (
        <ul className="todo-list">
            {todos.map((todo) => (
                <ToDoItem key={todo.id} todo={todo} {...props} />
            ))}
        </ul>
    );
}

export default ToDoList;
