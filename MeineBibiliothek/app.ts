import { MetaData } from "./MetaData";
import { TodoList } from "./TodoList";

const todoList = new TodoList<MetaData>();

todoList.note('Buy milk', { user: '', date: new Date});
todoList.note('Buy bread', { user: '', date: new Date});

