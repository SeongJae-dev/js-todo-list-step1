export class TodoInput {
    constructor({ todo }) {
        this.$todoInput = document.querySelector("#new-todo-title");
        this.$todoInput.addEventListener("keypress", e => this.addTodo(e));
        this.todo = todo;
    }

    addTodo({target, key}) {
        if (key === "Enter") {
            this.todo({
                id: Math.floor(Math.random() * 100),
                contents: target.value,
                state: "active",
            });
            target.value = "";
        }
    }

}