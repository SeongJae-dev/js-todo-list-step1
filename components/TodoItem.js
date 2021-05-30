export class TodoItem {
    constructor(contents) {
        this.todoItem = this.template(contents);
    }

    template = ({contents, state, id}) => {
        console.log("item props ", contents, state, id);
        return `
            <li data-id=${id} class="${state === 'completed' ? 'completed' : ''}">
              <div class="view">
                <input class="toggle" type="checkbox" ${state === 'completed' ? 'checked' : ''}>
                <label class="label">${contents}</label>
                <button class="destroy"></button>
              </div>
                <input class="edit" value="${contents}" />
            </li>`;
    };
}