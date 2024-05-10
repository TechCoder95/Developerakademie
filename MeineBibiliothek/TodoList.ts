import { Todo } from './Todo';

class TodoList<TData> {
    private todos: Todo<TData>[] = [];


    public note (description: string, data: TData): string {

        const todo: Todo<TData> = {
            description,
            status: 'open',
            data
        };

        this.todos.push(todo);

        return `Todo "${description}" added`;
    }


    public edit (description: string, data: TData): void {

        const todo = this.todos.find(todo => todo.description === description);

        if (todo) {
            todo.data = data;
        }
    }


    public tickOFF (description: string): void {

        const todo = this.todos.find(todo => todo.description === description);

        if (todo) {
            todo.status = 'done';
        }
    }

}

export { TodoList };