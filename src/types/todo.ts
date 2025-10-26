export interface TODO {
    id: string;
    task: string;
    done: boolean;
    createdAt: number;
    updatedAt: number | null;
    updated: boolean;
}

export type TODOActions = AddAction | UpdateAction | DeleteAction;

interface AddAction {
    type: "add";
    todo: TODO;
}

interface UpdateAction {
    type: "update";
    todo: TODO;
}

interface DeleteAction {
    type: "delete";
    id: string;
}
