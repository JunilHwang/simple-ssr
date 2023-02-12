export const TodoItem = (item) => `<li>${item}</li>`;
export const TodoItems = (items) => `<ul>${items.map(TodoItem).join('')}</ul>`;
