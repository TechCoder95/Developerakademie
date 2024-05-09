import { Status } from './Status';
interface Todo<TData> {
    description: string;
    status: Status;
    data: TData;
}

export { Todo };