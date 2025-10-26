import { useState, type Dispatch, type FormEvent } from "react";
import type { TODOActions } from "../types/todo";

function NewToDo({ dispatchTODO }: { dispatchTODO: Dispatch<TODOActions> }) {
    const [task, setTask] = useState("");

    function handleSubmit(evt: FormEvent<HTMLFormElement>) {
        evt.preventDefault();
        if (task.trim() === "") return;

        const todo = {
            id: crypto.randomUUID(),
            task,
            done: false,
            createdAt: Date.now(),
            updatedAt: null,
            updated: false,
        };
        
        dispatchTODO({ type: "add", todo });

        // Clear input value
        const form = evt.target as HTMLFormElement;
        form.reset();

        setTask("");
    }

    return (
        <form className="new-todo" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Drink Water"
                onChange={(evt) => setTask(evt.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default NewToDo;
