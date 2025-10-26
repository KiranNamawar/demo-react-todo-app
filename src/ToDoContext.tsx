import {
    createContext,
    useContext,
    useReducer,
    type Dispatch,
    type ReactElement,
} from "react";
import type { TODO, TODOActions } from "./types/todo";

const ToDoContext = createContext<[TODO[], Dispatch<TODOActions>]>([
    [],
    () => {},
]);

function todoReducer(todos: TODO[], action: TODOActions) {
    console.log(action);
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

function ToDoProvider({ children }: { children: ReactElement }) {
    const todos = useReducer(todoReducer, []);
    return <ToDoContext.Provider value={todos}>{children}</ToDoContext.Provider>;
}

export function useToDos() {
    return useContext(ToDoContext);
}

export default ToDoProvider;
