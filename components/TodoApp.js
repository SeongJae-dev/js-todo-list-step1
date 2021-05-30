import {BaseComponent} from "./BaseComponent.js";
import {TodoInput} from "./TodoInput.js";
import {TodoList} from "./TodoList.js";

export class TodoApp extends BaseComponent {
    constructor() {
        super()
        this.todoList = new TodoList();
        new TodoInput({
            todo: (contents) => {
                this.setState(contents);
            }
        })
    }

    setState(props) {
        console.log("Todo App props :", props);
        this.todoList.render(props);
    }

}